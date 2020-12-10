from werkzeug.security import generate_password_hash
from app.models import db, Comment


def seed_comments():
    comments = [
        {
            'body': 'I love your work!!',
            'sender_id': 1,
            'transaction_id': 1
        },
        {
            'body': 'You are amazing!',
            'sender_id': 4,
            'transaction_id': 2
        },
        {
            'body': 'Just wanted to show my support!',
            'sender_id': 6,
            'transaction_id': 3
        },
        {
            'body': 'I\'m a huge fan. Keep it up!',
            'sender_id': 8,
            'transaction_id': 4
        },
    ]

    comments_list = [Comment(body=item['body'],
                             sender_id=item['sender_id'],
                             transaction_id=item['transaction_id'])
                     for item in comments]

    db.session.add_all(comments_list)

    db.session.commit()


def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
