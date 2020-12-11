from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    users = [
        {
            'name': 'Demo User',
            'username': 'demouser',
            'email': 'demo@user.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/user-1.jpg',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/patrick-hendry-HYLUskFJkpU-unsplash.jpg',
            'tips': 30,
            'wallet': 20
        },
        {
            'name': 'Kathleen Yeh',
            'username': 'hellokat',
            'email': 'kat@yeh.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/octocat-1607577511709.png',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/ian-schneider-TamMbr4okv4-unsplash.jpg',
            'tips': 7,
            'wallet': 10
        },
        {
            'name': 'Annie Leibovitz',
            'username': 'aleibovitz',
            'email': 'anniesrecipes@gmail.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/user-3.jpg',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/matteo-catanese-PI8Hk-3ZcCU-unsplash.jpg',
            'tips': 24,
            'wallet': 20
        },
        {
            'name': 'Aaron Thompson',
            'username': 'thompsonarts',
            'email': 'benjaminarts@dance.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/aaron.jpg',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/calum-lewis-vA1L1jRTM70-unsplash.jpg',
            'tips': 26,
            'wallet': 40
        },
        {
            'name': 'Banksy',
            'username': 'banksy',
            'email': 'banksy@banksy.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/banksy.jpg',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/banksy.jpg',
            'tips': 60,
            'wallet': 80
        },
        {
            'name': 'Benjamin Suter',
            'username': 'naturephotography',
            'email': 'ben@suter.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/benjamin.jpg',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/benjamin.webp',
            'tips': 24,
            'wallet': 20
        },
        {
            'name': 'Jonathan Mott',
            'username': 'healthyblogger',
            'email': 'joel@mott.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/jonathan.jpg',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/jonathan.webp',
            'tips': 20,
            'wallet': 30
        },
        {
            'name': 'Nicole Orr',
            'username': 'nicorr',
            'email': 'nic@orr.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/nicole.jpg',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/nicole.webp',
            'tips': 4,
            'wallet': 8
        },
        {
            'name': 'Courtney Cook',
            'username': 'courtneycooks',
            'email': 'court@cook.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/courtney.jpg',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/courtney.webp',
            'tips': 18,
            'wallet': 3
        },
        {
            'name': 'Paige Corter',
            'username': 'paigeflows',
            'email': 'paige@corter.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/paige.jpg',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/paige.webp',
            'tips': 3,
            'wallet': 28
        },
        {
            'name': 'Jennie Kuehner',
            'username': 'jennie01',
            'email': 'jen@kuehner.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/jennie.jpg',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/jennie.webp',
            'tips': 2,
            'wallet': 10
        },
        {
            'name': 'Jeffrey Kellner',
            'username': 'jkellner',
            'email': 'jeff@kellner.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/jeffrey.jpg',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/jeffrey.jpg',
            'tips': 2,
            'wallet': 6
        },
        {
            'name': 'Sara Strohl',
            'username': 'sarastrohl',
            'email': 'sara@strohl.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/sara.jpg',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/sara.jpg',
            'tips': 6,
            'wallet': 30
        },
        {
            'name': 'Nicholas Tillmon',
            'username': 'itsnicholas',
            'email': 'nic@tillmon.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/nicholas.jpg',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/nicholas.jpg',
            'tips': 3,
            'wallet': 7
        },
        {
            'name': 'Jerri Sigmund',
            'username': 'heyjerri',
            'email': 'jerri@sigmund.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/jerri.jpg',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/jerri.jpg',
            'tips': 8,
            'wallet': 40
        },
    ]

    users_list = [User(name=item['name'],
                       username=item['username'],
                       email=item['email'],
                       hashed_password=item['hashed_password'],
                       profile_image_url=item['profile_image_url'],
                       cover_image_url=item['cover_image_url'],
                       tips=item['tips'],
                       wallet=item['wallet'])
                  for item in users]

    for i in range(len(users_list) - 2):
        users_list[i].followers.append(users_list[i+1])

    db.session.add_all(users_list)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
