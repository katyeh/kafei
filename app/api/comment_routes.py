from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Post

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/<int:id>', methods=["DELETE"])
def delete_comment(id):
    try:
        comment = Comment.query.get(id)

        db.session.delete(comment)
        db.session.commit()
        return jsonify(message='Comment was successfully deleted')
    except:
        return jsonify(message='Error deleting the comment.')
