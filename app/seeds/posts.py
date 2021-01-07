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
        },
        {
            'body': 'Hi everyone! My name is Ben and I have been an artist for over a decade. Leave a coffee if you like my artwork.',
            'user_id': 4
        },
        {
            'body': 'Many of you around the world have expressed your appreciation of my anonymous artwork, so I will be sharing more here.',
            'user_id': 5
        },
        {
            'body': 'Hey y\'all, I\'m Ben. Look forward to posting stuff and getting to know you all.',
            'user_id': 6
        },
        {
            'body': 'Just wanted to let everyone know I\'m planning on switching to nature photography. Check out my photos and let me know what you think!',
            'user_id': 6
        },
        {
            'body': 'I\'m Nicole but people call me Nicc. I love spending time with my 2 children and sharing my blog/lifestyle.',
            'user_id': 8
        },
        {
            'body': 'I\'m an award-winning chef with experience cooking in restaurants all around the world. Check out my page for more!',
            'user_id': 9
        },
        {
            'body': 'Taking song recommendations to dance to - buy me a coffee and drop a song title for me on my page!',
            'user_id': 10
        },
        {
            'body': 'Thanks for visiting! I\'m new on this site and would love to make new friends! Follow for a follow back.',
            'user_id': 11
        },
        {
            'body': 'Hey this is Jeff!! Welcome to my space.',
            'user_id': 12
        },
        {
            'body': 'Feeling motivated lately. I have tons of ideas for new content so keep checking back!',
            'user_id': 12
        },
        {
            'body': 'I\'ve been travelling for the past year and currently residing in New York. Thinking about settling down but I feel like there is still so much to see.',
            'user_id': 15
        },
    ]

    posts_list = [Post(body=item['body'],
                       user_id=item['user_id'])
                  for item in posts]

    db.session.add_all(posts_list)

    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
