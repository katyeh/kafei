"""photos seed

Revision ID: d36811e377e2
Revises: 2f3f7ac68e1f
Create Date: 2020-12-02 00:40:55.380747

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import table


# revision identifiers, used by Alembic.
revision = 'd36811e377e2'
down_revision = '2f3f7ac68e1f'
branch_labels = None
depends_on = None


def upgrade():
    photo = table('photos',
        sa.Column('id', sa.Integer()),
        sa.Column('pic_url', sa.String()),
        sa.Column('user_id', sa.Integer()),
    )

    op.bulk_insert(photo, [
        {
            'user_id': 1,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/1/86afadfc-21da-4c8a-bc4d-cf130457f077_debbie-molle-6DSID8Ey9-U-unsplash.jpg',
        },
        {
            'user_id': 1,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/1/256a841b-10bb-4dd2-8267-0e1ec564bb45_edgar-nKC772R_qog-unsplash (1).jpg',
        },
        {
            'user_id': 1,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/1/3d3a4a0f-0b76-47c3-b0b6-f2c51187c818_geran-de-klerk-wYy3rvvgjAU-unsplash.jpg',
        },
        {
            'user_id': 1,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/1/667a1e9f-1a15-4574-9fe6-05d3b28c5f1d_jeremy-zero-0gGHxAbBTGc-unsplash.jpg',
        },
        {
            'user_id': 1,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/1/e13139f4-df22-47e3-a63b-d58aef424ea7_lukasz-juszczak-AWytKm7gQpo-unsplash.jpg',
        },
        {
            'user_id': 1,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/1/marko-blazevic-hcVtC5pgZTY-unsplash.jpg',
        },
        {
            'user_id': 1,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/1/philip-swinburn-Z0tTnl_eOIo-unsplash.jpg',
        },
        {
            'user_id': 1,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/1/priss-enri-cYkTR9_IcSk-unsplash.jpg'
        },
        {
            'user_id': 1,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/1/ralu-gal-G8cB8hY3yvU-unsplash.jpg'
        },
        {
            'user_id': 1,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/1/sam-balye-1aJiV6n-z0c-unsplash.jpg'
        },
        {
            'user_id': 2,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/2/IMG_0057.png'
        },
        {
            'user_id': 2,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/2/IMG_3689.png'
        },
        {
            'user_id': 2,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/2/Untitled_Artwork+1.png'
        },
        {
            'user_id': 2,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/2/Untitled_Artwork+2.png'
        },
        {
            'user_id': 2,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/2/Untitled_Artwork+3.png'
        },
        {
            'user_id': 2,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/2/Untitled_Artwork+4.png'
        },
        {
            'user_id': 2,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/2/Untitled_Artwork.png'
        },
        {
            'user_id': 2,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/1/ffa5a50d-3a13-430f-a538-8fd3a9c0ee08_IMG_4100.jpg'
        },
        {
            'user_id': 3,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/3/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'
        },
        {
            'user_id': 3,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/3/becca-tapert-mDOGXiuVb4M-unsplash.jpg'
        },
        {
            'user_id': 3,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/3/bruna-branco-7r1HxvVC7AY-unsplash.jpg'
        },
        {
            'user_id': 3,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/3/casey-lee-awj7sRviVXo-unsplash.jpg'
        },
        {
            'user_id': 3,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/3/pexels-karolina-grabowska-4033296.jpg'
        },
        {
            'user_id': 3,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/3/pexels-karolina-grabowska-4198139.jpg'
        },
        {
            'user_id': 4,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/4/alex-perez-m_ikwYM7ntI-unsplash.jpg'
        },
        {
            'user_id': 4,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/4/breakreate-tFA3kJcMUco-unsplash.jpg'
        },
        {
            'user_id': 4,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/4/jarylle-adriane-paloma-9A0f66jlWKI-unsplash.jpg'
        },
        {
            'user_id': 4,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/4/liel-anapolsky-OC7lh5GcPzU-unsplash.jpg'
        },
        {
            'user_id': 4,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/4/michael-afonso-z8Tul255kGg-unsplash.jpg'
        },
        # {
        #     'user_id': 4,
        #     'pic_url': ''
        # },
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
