"""artists seed

Revision ID: 6e9a19377dc3
Revises: ffdc0a98111c
Create Date: 2020-12-01 23:50:28.184403

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table


# revision identifiers, used by Alembic.
revision = '6e9a19377dc3'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    user = table('users',
        sa.Column('id', sa.Integer()),
        sa.Column('name', sa.String()),
        sa.Column('username', sa.String()),
        sa.Column('email', sa.String()),
        sa.Column('bio', sa.String()),
        sa.Column('hashed_password', sa.String()),
        sa.Column('profile_image_url', sa.String()),
        sa.Column('cover_image_url', sa.String()),
        sa.Column('tips', sa.Integer()),
        sa.Column('wallet', sa.Integer())
    )

    op.bulk_insert(user,
    [
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
            'profile_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/profileImages/sup',
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
            'name': 'Ben Thompson',
            'username': 'thompsonarts',
            'email': 'benjaminarts@dance.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': '',
            'cover_image_url': 'https://kafei.s3-us-west-1.amazonaws.com/coverImages/calum-lewis-vA1L1jRTM70-unsplash.jpg',
            'tips': 26,
            'wallet': 40
        },
        {
            'name': 'Banksy',
            'username': 'banksy',
            'email': 'banksy@banksy.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': '',
            'cover_image_url': '',
            'tips': 60,
            'wallet': 80
        },
        {
            'name': 'Benjamin Suter',
            'username': 'naturephotography',
            'email': 'ben@suter.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': '',
            'cover_image_url': '',
            'tips': 24,
            'wallet': 20
        },
        {
            'name': 'Joel Mott',
            'username': 'healthyblogger',
            'email': 'joel@mott.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': '',
            'cover_image_url': '',
            'tips': 20,
            'wallet': 30
        },
        {
            'name': 'Nicole Orr',
            'username': 'nicorr',
            'email': 'nic@orr.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': '',
            'cover_image_url': '',
            'tips': 4,
            'wallet': 8
        },
        {
            'name': 'Courtney Cook',
            'username': 'courtneycooks',
            'email': 'court@cook.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': '',
            'cover_image_url': '',
            'tips': 18,
            'wallet': 3
        },
        {
            'name': 'Jeffrey Kellner',
            'username': 'jkellner',
            'email': 'jeff@kellner.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': '',
            'cover_image_url': '',
            'tips': 2,
            'wallet': 6
        },
        {
            'name': 'Trent Strohl',
            'username': 'trentstrohl',
            'email': 'trent@strohl.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': '',
            'cover_image_url': '',
            'tips': 6,
            'wallet': 30
        },
        {
            'name': 'Nicholas Tillmon',
            'username': 'itsnicholas',
            'email': 'nic@tillmon.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': '',
            'cover_image_url': '',
            'tips': 3,
            'wallet': 7
        },
        {
            'name': 'Paige Corter',
            'username': 'paigeflows',
            'email': 'paige@corter.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': '',
            'cover_image_url': '',
            'tips': 3,
            'wallet': 28
        },
        {
            'name': 'Jennie Kuehner',
            'username': 'jennie01',
            'email': 'jen@kuehner.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': '',
            'cover_image_url': '',
            'tips': 2,
            'wallet': 10
        },
        {
            'name': 'Jerri Sigmund',
            'username': 'heyjerri',
            'email': 'jerri@sigmund.com',
            'hashed_password': 'pbkdf2:sha256:150000$0Y70Jx11$5170eba1cde3b4481c1a289401d7273375faa4691e3ff10e8bd1ac4e9784a5c6',
            'profile_image_url': '',
            'cover_image_url': '',
            'tips': 8,
            'wallet': 40
        },
    ])


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user_tags')
    op.drop_table('tags')
    op.drop_table('likes')
    op.drop_table('photos')
    op.drop_table('comments')
    op.drop_table('followers')
    op.drop_table('transactions')
    op.drop_table('posts')
    op.drop_table('users')
    # ### end Alembic commands ###
