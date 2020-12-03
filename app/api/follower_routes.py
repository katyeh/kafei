from flask import Blueprint, jsonify, request
from app.models import db, Follower
import json

follower_routes = Blueprint('followers', __name__)

# @follower_routes.route('/followers/<int:follower_id>', methods=["DELETE"])
# def unfollow(user_id, follower_id):
#     follower_data = Follower.query.filter(Follower.follower_id == follower_id, Follower.followed_id == user_id)
#     try:
#         db.session.delete(follower_data)
#         db.session.commit()
#         return jsonify(message=f"Unfollowed user with the id of {user_id}.")
#     except:
#         return jsonify(message=f"Error unfollowing user with the id of {user.id}.")
