from flask import Blueprint, jsonify, request
from flask_login import login_required
from flask_cors import cross_origin
from sqlalchemy.orm import relationship, sessionmaker, joinedload
from sqlalchemy import func, select, or_
from app.models import db, User, Post, Photo, Comment, Like, Transaction, Follower

import json

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
# @login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/following')
def following(id):
    following = Follower.query.filter(Follower.follower_id == id).all()
    return jsonify(following=[follower.to_dict() for follower in following])


@user_routes.route('/<int:id>/home')
# @login_required
def user_home(id):

    liked_posts_ids = Like.query.filter(
        Like.user_id == id).options(joinedload(Like.post)).all()
    liked_photos_ids = Like.query.filter(
        Like.user_id == id).options(joinedload(Like.photo)).all()
    creator_ids = [
        liked_post_id.post.user_id for liked_post_id in liked_posts_ids]
    # creator_ids_photo = [liked_photo_id.photo.user_id for liked_photo_id in liked_photos_ids]
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
    except:
        return {'errors': 'There are no users available.'}, 400


@user_routes.route('/<int:id>/posts')
def posts(id):
    posts = Post.query.filter(Post.user_id == id).all()
    return jsonify(posts=[post.to_dict() for post in posts])


@user_routes.route('/<int:id>/posts', methods=["POST"])
def new_post(id):
    try:
        body = request.json['body']
        user_id = id

        new_post = Post(body=body, user_id=user_id)

        db.session.add(new_post)
        db.session.commit()

        post = Post.query.get(new_post.id)
        return post.to_dict()
    except:
        return jsonify(error='Post unsuccessful.')


@user_routes.route('/<int:id>/photos')
def photos(id):
    photos = Photo.query.filter(Photo.user_id == id).all()
    return jsonify(photos=[photo.to_dict() for photo in photos])


@user_routes.route('/<int:id>/photos', methods=["POST"])
def new_photo(id):
    data = json.loads(request.data)
    photo = Photo()
    photo.pic_url = data["pic_url"]
    photo.user_id = id

# @user_routes.route('/<int:id>/tips', methods=["PUT"])
# def new_tip(id):
#   try:
#     creator = Creator.query.get(id)
#     wallet = request.json['wallet']
#     tips = request.json['tips']

#     creator.wallet = wallet
#     creator.tips = tips

#     db.session.commit()
#     return "Successfully tipped user with id of {id}."
#   except:
#     return jsonify(error = f"Error during transaction.")


@user_routes.route('/<int:id>/tips', methods=["GET", "POST", "PUT"])
def new_tip(id):
    try:
        amount = request.json['amount']
        sender_id = request.json['sender_id']
        recipient_id = id

        creator = User.query.filter_by(id=id).first()
        creator.tips = creator.tips + amount

        sender = User.query.filter_by(id=sender_id).first()
        sender.wallet = sender.wallet - amount

        new_transaction = Transaction(
            amount=amount, sender_id=sender_id, recipient_id=id)
        db.session.add(new_transaction)
        db.session.commit()
        transaction = Transaction.query.get(new_transaction.id)
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


@user_routes.route('/<int:id>/following', methods=["POST"])
def follow(id):

    follower_id = request.json['follower_id']
    followed_id = id

    new_follower = Follower(follower_id=follower_id, followed_id=id)

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
    except:
        return jsonify(message=f"Error unfollowing user with the id of {user_id}.")
