from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Post, Like, Comment
from sqlalchemy.orm import relationship, sessionmaker, joinedload

post_routes = Blueprint('posts', __name__)


@post_routes.route('/<int:id>')
def post(id):
    post = Post.query.get(id)
    if not post:
        return {'errors': 'Could not find post.'}, 400
    return post.to_dict()


@post_routes.route('/<int:id>/comments')
def get_comments(id):
    try:
        comments = Comment.query.filter(Comment.post_id == id).all()
        return jsonify(comments = [comment.to_dict() for comment in comments])
    except:
        return {'errors': 'Could not find comments.'}, 400


@post_routes.route('/<int:id>', methods=["PUT"])
def update_post(id):
    try:
        post = Post.query.get(id)
        body = request.json['body']

        post.body = body

        db.session.commit()
        return jsonify(post.to_dict())
    except:
        return jsonify(error='Post update unsuccessful.')

@post_routes.route('/<int:id>', methods=["DELETE"])
def delete_post(id):
    try:
        post = Post.query.get(id)

        db.session.delete(post)
        db.session.commit()
        return jsonify(message='Post was successfully deleted')
    except Exception as error:
        return jsonify(error=repr(error))

@post_routes.route('/<int:post_id>/likes')
def likes(post_id):
    likes = Like.query.filter(Like.post_id == post_id).all()
    return jsonify(likes = [like.to_dict() for like in likes])

@post_routes.route('/<int:post_id>/likes', methods=["POST"])
def new_like(post_id):
    try:
        post_id = post_id
        user_id = request.json['user_id']

        new_like = Like(post_id=post_id, user_id=user_id)

        db.session.add(new_like)
        db.session.commit()

        like = Like.query.get(new_like.id)
        return jsonify(like.to_dict())
    except Exception as error:
        return jsonify(error=repr(error))

@post_routes.route('/<int:id>/comments', methods=["POST"])
def new_post_comment(id):
    body = request.json['body']
    sender_id = request.json['sender_id']
    post_id = id

    new_comment = Comment(body=body, sender_id=sender_id, post_id=post_id)

    try:
        db.session.add(new_comment)
        db.session.commit()
        comment = Comment.query.get(new_comment.id)
        return comment.to_dict()
    except:
        return jsonify(error='Error posting comment.')
