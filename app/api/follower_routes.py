from flask import Blueprint, jsonify, request
from app.models import db, Follower
import json
from sqlalchemy import and_

follower_routes = Blueprint('followers', __name__)

@follower_routes.route('/<int:follower_id>/followed/<int:followed_id>', methods=["DELETE"])
def unfollow(follower_id, followed_id):
    follower_data = Follower.query.filter(and_(Follower.follower_id == follower_id,
                                               Follower.followed_id == followed_id))
    try:
        db.session.delete(follower_data)
        db.session.commit()
        return jsonify(message=f"Unfollowed user with the id of {followed_id}.")
    except Exception as error:
        return jsonify(error=repr(error))
