from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Like

like_routes = Blueprint('likes', __name__)

@like_routes.route('/<int:id>', methods=["DELETE"])
def delete_like():
    try:
        like = Like.query.get(id)
        db.session.delete(like)
        db.session.commit()
        return jsonify(message = f"Deleted like with id of {id}.")
    except:
        return jsonify(error = f"Error deleting like with id of {id}.")
