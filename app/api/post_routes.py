from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Post, Like

post_routes = Blueprint('posts', __name__)

@post_routes.route('/<int:id>')
def post():
    post = Post.query.get(id)
    if not post:
        return {'errors': 'Could not find post.'}, 400
    return post.to_dict()

@post_routes.route('/<int:id>', methods=["PUT"])
def update_post(id):
    try:
        post = Post.query.get(id)
        body = request.json['body']

        db.session.commit()
        return jsonify(message='Post was successfully updated')
    except:
        return jsonify(error='Post update unsuccessful.')

@post_routes.route('/<int:id>', methods=["DELETE"])
def delete_post(id):
    try:
        post = Post.query.get(id)

        db.session.delete(post)
        db.session.commit()
        return jsonify(message='Post was successfully deleted')
    except:
        return jsonify(message='Error deleting the post.')

@post_routes.route('/<int:post_id>/likes')
def likes(post_id):
    likes = Like.query.filter(Like.post_id == post_id).all()
    return jsonify(likes = [like.to_dict() for like in likes])

@post_routes.route('/<int:post_id>/likes', methods=["POST"])
def new_like(post_id):
    data = json.loads(request.data)
    post = Post.query.get(post_id)
    user_id = post.user_id
    like = Like()
    like.post_id = post_id
    like.user_id = user_id

    try:
        db.session.add(like)
        db.session.commit()
        return jsonify(message=f"Liked a post with the id of {id}."), 201
    except:
        return jsonify(error=f"Error liking a post with the id of {id}."), 404

@post_routes.route('/<int:id>/comments', methods=["POST"])
def new_post_comment(id):
    data = json.loads(request.data)
    comment = Comment()
    comment.body = data['body']
    comment.sender_id = request.json['sender_id']
    comment.post_id = id
    try:
        db.session.add(comment)
        db.session.commit
        return jsonify(message='Comment successful on post with id of {id}.')
    except:
        return jsonify(error='Error posting comment.')

