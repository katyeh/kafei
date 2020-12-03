from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Comment

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/<int:id>', methods=["DELETE"])
def delete_comment(id):
    try:
        comment = Comment.query.get(id)
        db.session.delete(comment)
        db.session.commit()
        return jsonify(message = f"Deleted comment with id of {id}.")
    except:
        return jsonify(error = f"Error deleting comment with id of {id}.")
