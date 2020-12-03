from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User, Post, Photo, Comment, Like, Tip, Follower

import json

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/<int:id>/home')
@login_required
def user_home(id):
    liked_posts_ids = Like.query.filter(Like.user_id == id).options(joinedload(Like.Post)).all()
    liked_photos_ids = Like.query.filter(Like.user_id == id).options(joinedload(Like.Photo)).all()
    creator_ids = [liked_post_id.post.user_id for liked_post_id in liked_post_ids]
    suggested_creators = [User.query.get(creator_id) for creator_id in creator_ids]

    followed_ids = Follower.query.filter(Follower.follower_id == id).all()
    followed_creators = User.query.get(Follower.followed_ids).all()

    featured_creators = User.query.order_by(func.random()).filter(User.id != id).limit(6).all()
    featured_creators = set(featured_creators) - set(suggested_creators)


@user_routes.route('/<int:id>/posts')
def posts():
    posts = Post.query.filter(Post.user_id == id).all()
    return jsonify(posts=[post.to_dict() for post in posts])


@user_routes.route('/<int:id>/posts', method=["POST"])
def new_post(id):
    data = json.loads(request.data)
    post = Post()
    post.body = data['body']
    post.user_id = id
    try:
        db.session.add(post)
        db.session.commit
        return jsonify(message='Successful post.')
    except:
        return jsonify(error='Post unsuccessful.')


@user_routes.route('/<int:id>/comments')
def comments(id):
    comments = Comment.query.filter(Comment.user_id == id).all()
    if comments:
        return {"comments": [comment.to_dict() for comment in comments]}
    else:
        return jsonify(error='Error getting comments.')

@user_routes.route('/<int:id>/photos')
def photos(id):
    photos = Photo.query.filter(Photo.user_id == id).all()
    return jsonify(photos = [photo.to_dict() for photo in photos])

@user_routes.route('/<int:id>/photos', methods=["POST"])
def new_photo(id):
    data = json.loads(request.data)
    photo = Photo()
    photo.pic_url = data["pic_url"]
    photo.user_id = id

@user_routes.route('/<int:id>/tips', methods=["PUT"])
def new_tip(id):
  try:
    creator = Creator.query.get(id)
    wallet = request.json['wallet']
    tips = request.json['tips']

    creator.wallet = wallet
    creator.tips = tips

    db.session.commit()
    return "Successfully tipped user with id of {id}."
  except:
    return jsonify(error = f"Error during transaction.")


@user_routes.route('/<int:id>/followers')
def get_followers(id):
    followers = User.query.filter(Follower.followed_id == id).all()
    return jsonify(followers = [follower.to_dict() for follower in followers])


@user_routes.route('/<int:id>/following')
def following(id):
    followed_ids = Follower.query.filter(Follower.follower_id == id).all()
    followed_creators = User.query.filter(Follower.followed_id == followed_ids).all()
    return jsonify(followed_creators = [followed_creator.to_dict() for followed_creator in followed_creators])


@user_routes.route('/<int:id>/following', methods=["POST"])
def follow(id):
    followerId = json.loads(request.data)["id"]
    follower = Follower()
    follower.follower_id = followerId
    follower.followed_id = id

  try:
    db.session.add(follower)
    db.session.commit()
    return jsonify(message = f"Followed artist with the id of {artistId}."), 201
  except:
    return jsonify(error = f"Error following artist with the id of {artistId}."), 404
