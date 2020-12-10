from werkzeug.security import generate_password_hash
from app.models import db, Tag

def seed_tags():

    tags = [
        {
            'name': 'Art'
        },
        {
            'name': 'Blogging'
        },
        {
            'name': 'Dance & Theatre'
        },
        {
            'name': 'Design'
        },
        {
            'name': 'Food & Drink'
        },
        {
            'name': 'Lifestyle'
        },
        {
            'name': 'Photography'
        },
    ]

    tags_list = [Tag(name=item['name']) for item in tags]

    db.session.add_all(tags_list)

    db.session.commit()


def undo_tags():
    db.session.execute('TRUNCATE tags RESTART IDENTITY CASCADE;')
    db.session.commit()
