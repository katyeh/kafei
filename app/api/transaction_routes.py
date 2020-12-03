from flask import Blueprint, jsonify, session, request
from app.models import db, User, Comment, Transaction


transaction_routes = Blueprint('transactions', __name__)


# @transaction_routes.route('/<int:id>/comments')
# def comments(id):
#     comments = Comment.query.filter(Comment.sender_id == id).all()
#     if comments:
#         return {"comments": [comment.to_dict() for comment in comments]}
#     else:
#         return jsonify(error='Error getting comments.')
