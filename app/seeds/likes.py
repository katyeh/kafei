from werkzeug.security import generate_password_hash
from app.models import db, Like

def seed_likes():

    likes = [
        {
            'post_id': 1,
            'user_id': 2
        },
        {
            'post_id': 1,
            'user_id': 3
        },
        {
            'post_id': 1,
            'user_id': 4
        },
        {
            'post_id': 1,
            'user_id': 5
        },
        {
            'post_id': 1,
            'user_id': 6
        },
        {
            'post_id': 1,
            'user_id': 7
        },
        {
            'post_id': 2,
            'user_id': 10
        },
        {
            'post_id': 2,
            'user_id': 7
        },
        {
            'post_id': 3,
            'user_id': 1
        },
        {
            'post_id': 3,
            'user_id': 6
        },
        {
            'post_id': 3,
            'user_id': 3
        },
        {
            'post_id': 4,
            'user_id': 10
        },
        {
            'post_id': 5,
            'user_id': 7
        },
        {
            'post_id': 6,
            'user_id': 3
        },
        {
            'post_id': 6,
            'user_id': 4
        },
        {
            'post_id': 6,
            'user_id': 5
        },
        {
            'post_id': 7,
            'user_id': 12
        },
        {
            'post_id': 9,
            'user_id': 3
        },
        {
            'post_id': 9,
            'user_id': 10
        },
        {
            'post_id': 9,
            'user_id': 2
        },
        {
            'post_id': 9,
            'user_id': 4
        },
        {
            'post_id': 9,
            'user_id': 5
        },
        {
            'post_id': 9,
            'user_id': 6
        },
        {
            'post_id': 13,
            'user_id': 7
        },
        {
            'post_id': 13,
            'user_id': 1
        },
        {
            'post_id': 14,
            'user_id': 1
        },
        {
            'post_id': 14,
            'user_id': 2
        },
        {
            'post_id': 14,
            'user_id': 5
        },
    ]

    likes_list = [Like(post_id=item['post_id'],
                      user_id=item['user_id'])
                  for item in likes]

    db.session.add_all(likes_list)

    db.session.commit()


def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()
