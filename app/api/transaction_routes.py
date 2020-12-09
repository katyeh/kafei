from flask import Blueprint, jsonify, session, request
from app.models import db, User, Comment, Transaction


transaction_routes = Blueprint('transactions', __name__)

@transaction_routes.route('/<int:id>', methods=['DELETE'])
def delete_transaction(id):
    try:
        transaction = Transaction.query.get(id)
        comment = Comment.query.filter(Comment.transaction_id == id).one()

        db.session.delete(transaction)
        if comment:
            db.session.delete(comment)
        db.session.commit()
        return jsonify(message='Transaction {id} and comment {id} were successfully deleted.')
    except Exception as error:
        return jsonify(error=repr(error))
