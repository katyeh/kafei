from werkzeug.security import generate_password_hash
from app.models import db, Post

def seed_posts():

    posts = [
        {
            'body': 'Hey guys! Really excited to join kafei and interact with you all!',
            'user_id': 1
        },
        {
            'body': 'Thanks for all the support. New content coming soon, so keep your eyes peeled!',
            'user_id': 3
        },
        {
            'body': 'Hi, I\'m Kat. Thanks for visiting my page. Keep an eye out for more posts!',
            'user_id': 2
        }
    ]

    posts_list = [Post(body=item['body'],
                       user_id=item['user_id'])
                  for item in posts]

    db.session.add_all(posts_list)

    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
