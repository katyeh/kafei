from flask import Blueprint, jsonify, request
from flask_login import login_required
from flask_cors import cross_origin, CORS
from sqlalchemy.orm import relationship, sessionmaker, joinedload
from sqlalchemy import func, select, or_
from app.forms import UploadPhotoForm
from app.forms import TipForm
from app.models import db, User, Post, Photo, Comment, Like, Transaction, Follower
import json

import binascii
import os
import boto3
from botocore.exceptions import ClientError
import uuid

user_routes = Blueprint('users', __name__)

s3 = boto3.resource('s3')
client = boto3.client('s3',
                      aws_access_key_id=os.environ.get('AWS_ACCESS_KEY'),
                      aws_secret_access_key=os.environ.get(
                          'AWS_SECRET_ACCESS_KEY')
                      )
# print(f"ITS A SECRET!!!!!!!!!!!!")
# print(os.environ.get("AWS_SECRET_ACCESS_KEY"))


@user_routes.route('/<int:id>/photos', methods=["POST"])
def new_photo(id):
    try:
        form = UploadPhotoForm()

        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            key_list = request.files.keys()
            # print(f'??????????????????????')
            # print(key_list)
            if request.files:
                if "pic_url" in key_list:
                    new_image_data = request.files["pic_url"]
                    new_image_key = f"photos/{id}/{uuid.uuid4()}_{new_image_data.filename}"
                    client.put_object(Body=new_image_data, Bucket="kafei", Key=new_image_key,
                                      ContentType=new_image_data.mimetype, ACL="public-read")

            photo = Photo(
                pic_url=f"https://kafei.s3-us-west-1.amazonaws.com/{new_image_key}",
                user_id=id
            )
            db.session.add(photo)
            db.session.commit()
            return photo.to_dict()
    except Exception as error:
        return jsonify(error=repr(error))


@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
# @login_required
def user(id):
    user = User.query.get(id)
    return jsonify(user=[user.to_dict()])

@user_routes.route('/<int:id>', methods=["PUT"])
def update_bio(id):
    try:
        user = User.query.get(id)
        user.bio = request.json['bio']

        db.session.commit()
        return jsonify(user.to_dict())
    except Exception as error:
        return jsonify(error=repr(error))


@user_routes.route('/<int:id>/following')
def following(id):
    following = Follower.query.filter(Follower.follower_id == id).all()
    return jsonify(following=[follower.following_to_dict() for follower in following])


@user_routes.route('/<int:id>/home')
# @login_required
def user_home(id):
    liked_posts_ids = Like.query.filter(
        Like.user_id == id).options(joinedload(Like.post)).all()
    liked_photos_ids = Like.query.filter(
        Like.user_id == id).options(joinedload(Like.photo)).all()
    creator_ids = [
        liked_post_id.post.user_id for liked_post_id in liked_posts_ids]

    suggested_creators = [User.query.get(
        creator_id) for creator_id in creator_ids]

    following = Follower.query.filter(Follower.follower_id == id).all()

    featured_creators = User.query.order_by(
        func.random()).filter(User.id != id).limit(6).all()
    featured_creators = set(featured_creators) - set(suggested_creators)

    try:
        return jsonify(users={
            "based_on_likes": [user.to_dict() for user in set(suggested_creators)],
            "creators_you_follow": [follower.to_dict() for follower in set(following)],
            "featured_creators": [user.to_dict() for user in featured_creators]
        })
    except Exception as error:
        return jsonify(error=repr(error))


@user_routes.route('/splash')
def splash():
    featured_creators = User.query.order_by(
        func.random()).limit(3).all()
    try:
        return jsonify(users=[user.to_dict() for user in featured_creators])
    except Exception as error:
        return jsonify(error=repr(error))


@user_routes.route('/<int:id>/posts')
def posts(id):
    posts = Post.query.filter(Post.user_id == id).all()
    return jsonify(posts=[post.to_dict() for post in posts])


@user_routes.route('/<int:id>/posts', methods=["POST"])
def new_post(id):
    try:
        data = json.loads(request.data)
        body = data['body']
        user_id = id

        new_post = Post(body=body, user_id=user_id)

        db.session.add(new_post)
        db.session.commit()

        post = Post.query.get(new_post.id)
        return jsonify(post.to_dict())
    except Exception as error:
        return jsonify(error=repr(error))


@user_routes.route('/<int:id>/photos')
def photos(id):
    try:
        photos = Photo.query.filter(Photo.user_id == id).order_by(Photo.id.desc()).all()
        return jsonify(photos=[photo.to_dict() for photo in photos])
    except Exception as error:
        return jsonify(error=repr(error))


@user_routes.route('/<int:id>/tips', methods=["GET", "POST", "PUT"])
def new_tip(id):
    try:
        form = TipForm()
        form['csrf_token'].data = request.cookies['csrf_token']

        if form.validate_on_submit():
            amount = form.data['amount']
            sender_id = form.data['sender_id']
            recipient_id = id
            if sender_id != recipient_id:
                # increase tips for recipient
                creator = User.query.filter_by(id=id).first()
                creator.tips = creator.tips + amount
                # decrease wallet for sender
                sender = User.query.filter_by(id=sender_id).first()
                sender.wallet = sender.wallet - amount
                #post a new transaction
                new_transaction = Transaction(
                    amount=amount, sender_id=sender_id, recipient_id=id)

                db.session.add(new_transaction)
                db.session.commit()
                transaction = Transaction.query.get(new_transaction.id)

                # post a new message
                if (form.data['body']):
                    body = form.data['body']
                    transaction_id = new_transaction.id

                    new_comment = Comment(body=body,
                                          sender_id=sender_id,
                                          transaction_id=transaction_id
                                          )

                    db.session.add(new_comment)
                    db.session.commit()
                return transaction.to_dict()
    except Exception as error:
        print(error)
        return jsonify(error=repr(error))


@user_routes.route('/<int:id>/followers')
def get_followers(id):
    followers = Follower.query.filter(Follower.followed_id == id).all()
    return jsonify(followers=[follower.to_dict() for follower in followers])


# @user_routes.route('/<int:id>/following')
# def following(id):
#     followed_ids = Follower.query.filter(Follower.follower_id == id).all()
#     followed_creators = User.query.filter(Follower.followed_id == followed_ids).all()
#     return jsonify(followed_creators = [followed_creator.to_dict() for followed_creator in followed_creators])


@user_routes.route('/<int:id>/follow', methods=["POST"])
def follow(id):
    data = json.loads(request.data)
    new_follower = Follower()
    new_follower.follower_id = data["follower_id"]
    new_follower.followed_id = id

    db.session.add(new_follower)
    db.session.commit()

    follower = Follower.query.get(new_follower.id)

    try:
        db.session.add(follower)
        db.session.commit()
        return jsonify(follower.to_dict()), 201
    except Exception as error:
        print(error)
        return jsonify(error=f"Error following user with the id of {id}."), 404


@user_routes.route('/<int:id>/transactions')
def get_tips(id):
    transactions = Transaction.query.filter(
        Transaction.recipient_id == id).all()
    return jsonify(transactions=[transaction.to_dict() for transaction in transactions])


@user_routes.route('/<int:user_id>/followers/<int:follower_id>', methods=["DELETE"])
def unfollow(user_id, follower_id):
    follower_data = Follower.query.filter(
        Follower.follower_id == follower_id, Follower.followed_id == user_id)
    try:
        db.session.delete(follower_data)
        db.session.commit()
        return jsonify(message=f"Unfollowed user with the id of {user_id}.")
    except Exception as error:
        return jsonify(error=repr(error))
