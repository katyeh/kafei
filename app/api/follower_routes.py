from flask import Blueprint, jsonify, request
from app.models import db, Follower
import json

follower_routes = Blueprint('followers', __name__)

@follower_routes.route('/<int:id>/delete', methods=["DELETE"])
def unfollow():
    try:
        follow = Follow.query.get(id)
        db.session.delete(follow)
        db.session.commit()
        return jsonify(message=f"Successfully unfollowed.")
    except:
        return jsonify(message=f"Error unfollowing.")
