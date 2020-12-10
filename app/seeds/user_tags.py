from werkzeug.security import generate_password_hash
from app.models import db, UserTag


def seed_user_tags():
    user_tags = [
        {
            'tag_id': 1,
            'user_id': 1,
        },
        {
            'tag_id': 7,
            'user_id': 2,
        },
        {
            'tag_id': 7,
            'user_id': 3,
        },
        {
            'tag_id': 7,
            'user_id': 4,
        },
        {
            'tag_id': 7,
            'user_id': 6,
        },
        {
            'tag_id': 2,
            'user_id': 7,
        },
        {
            'tag_id': 3,
            'user_id': 8,
        },
        {
            'tag_id': 5,
            'user_id': 9,
        },
        {
            'tag_id': 6,
            'user_id': 10,
        },
        {
            'tag_id': 3,
            'user_id': 13,
        },
    ]

    usertags_list = [UserTag(tag_id=item['tag_id'],
                          user_id=item['user_id'])
                     for item in user_tags]

    db.session.add_all(usertags_list)

    db.session.commit()


def undo_user_tags():
    db.session.execute('TRUNCATE user_tags RESTART IDENTITY CASCADE;')
    db.session.commit()
