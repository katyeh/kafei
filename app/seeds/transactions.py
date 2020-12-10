from werkzeug.security import generate_password_hash
from app.models import db, Transaction


def seed_transactions():
    transactions = [
        {
            'amount': 2,
            'sender_id': 1,
            'recipient_id': 2
        },
        {
            'amount': 5,
            'sender_id': 4,
            'recipient_id': 2
        },
        {
            'amount': 1,
            'sender_id': 6,
            'recipient_id': 1
        },
        {
            'amount': 4,
            'sender_id': 8,
            'recipient_id': 6
        },
        {
            'amount': 10,
            'sender_id': 9,
            'recipient_id': 2
        },
        {
            'amount': 2,
            'sender_id': 12,
            'recipient_id': 1
        },
    ]

    transactions_list = [Transaction(amount=item['amount'],
                                     sender_id=item['sender_id'],
                                     recipient_id=item['recipient_id'])
                         for item in transactions]

    db.session.add_all(transactions_list)

    db.session.commit()


def undo_transactions():
    db.session.execute('TRUNCATE transactions RESTART IDENTITY CASCADE;')
    db.session.commit()
