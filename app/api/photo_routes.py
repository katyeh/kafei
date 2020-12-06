from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Photo, Like

photo_routes = Blueprint('photos', __name__)

@photo_routes.route('/<int:id>/comments', methods=["POST"])
def new_photo_comment(id):
    data = json.loads(request.data)
    comment = Comment()
    comment.body = data['body']
    comment.sender_id = request.json['sender_id']
    comment.photo_id = id
    try:
        db.session.add(comment)
        db.session.commit
        return jsonify(message='Comment successful on photo with id of {id}.')
    except:
        return jsonify(error='Error posting comment.')


@photo_routes.route('/<int:photo_id>/likes')
def likes(photo_id):
    likes = Like.query.filter(Like.photo_id == photo_id).all()
    return jsonify(likes = [like.to_dict() for like in likes])

@photo_routes.route('/<int:photo_id>/likes', methods=["POST"])
def new_like(photo_id):
    data = json.loads(request.data)
    photo = Photo.query.get(photo_id)
    user_id = photo.user_id
    like = Like()
    like.photo_id = photo_id
    like.user_id = user_id

    try:
        db.session.add(like)
        db.session.commit()
        return jsonify(message=f"Liked a photo with the id of {id}."), 201
    except:
        return jsonify(error=f"Error liking a photo with the id of {id}."), 404

@photo_routes.route('/<int:id>/photos', methods=["DELETE"])
def delete_photo():
    try:
        photo = Photo.query.get(id)
        db.session.delete(photo)
        db.session.commit()
        return jsonify(message=f"Successfully deleted photo with id of {id}.")
    except:
        return jsonify(error=f"Error deleting photo with id of {id}.")
