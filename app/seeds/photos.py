from werkzeug.security import generate_password_hash
from app.models import db, Photo


def seed_photos():
    photos = [
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
        {
            'user_id': 5,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/5/annie-spratt-g9Ap6zpNvzY-unsplash.jpg'
        },
        {
            'user_id': 5,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/5/eric-ward-P6NhhvGIL9k-unsplash.jpg'
        },
        {
            'user_id': 5,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/5/nick-fewings-34JeM5PmYSg-unsplash.jpg'
        },
        {
            'user_id': 6,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/6/blake-richard-verdoorn-cssvEZacHvQ-unsplash.jpg'
        },
        {
            'user_id': 6,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/6/jay-mantri-TFyi0QOx08c-unsplash.jpg'
        },
        {
            'user_id': 6,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/6/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg'
        },
        {
            'user_id': 9,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/9/brooke-lark-wMzx2nBdeng-unsplash.jpg'
        },
        {
            'user_id': 9,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/9/casey-lee-awj7sRviVXo-unsplash.jpg'
        },
        {
            'user_id': 9,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/9/cayla1-w6ftFbPCs9I-unsplash.jpg'
        },
        {
            'user_id': 9,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/9/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg'
        },
        {
            'user_id': 9,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/9/wright-brand-bacon-QE_UTZZGDD8-unsplash.jpg'
        },
        {
            'user_id': 10,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/10/daniel-sturgess-41Qu5qV1vbk-unsplash.jpg'
        },
        {
            'user_id': 10,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/10/hanson-lu-e7NzjDo3_hY-unsplash.jpg'
        },
        {
            'user_id': 10,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/10/samantha-weisburg-Vgj9bUwaqT0-unsplash.jpg'
        },
        {
            'user_id': 12,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/12/marcus-p-oUBjd22gF6w-unsplash.jpg'
        },
        {
            'user_id': 12,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/12/roberto-nickson-IOI3KCYsn0o-unsplash.jpg'
        },
        {
            'user_id': 12,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/12/viktor-theo-aIDkOU7eGgo-unsplash.jpg'
        },
        {
            'user_id': 8,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/8/alexey-lin-j-0pjgxE1kc-unsplash.jpg'
        },
        {
            'user_id': 8,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/8/brigitte-tohm-EAay7Aj4jbc-unsplash.jpg'
        },
        {
            'user_id': 8,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/8/stil-D4jRahaUaIc-unsplash.jpg'
        },
        {
            'user_id': 13,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/13/europeana-00SzLJ6yQOk-unsplash.jpg'
        },
        {
            'user_id': 13,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/13/library-of-congress-AWZNOWZyjNo-unsplash.jpg'
        },
        {
            'user_id': 13,
            'pic_url': 'https://kafei.s3-us-west-1.amazonaws.com/photos/13/tabitha-turner-QrYt4_K5TIc-unsplash.jpg'
        },
        # {
        #     'user_id': 12,
        #     'pic_url': ''
        # },
    ]

    photos_list = [Photo(user_id=item['user_id'],
                         pic_url=item['pic_url'])
                   for item in photos]

    db.session.add_all(photos_list)

    db.session.commit()


def undo_photos():
    db.session.execute('TRUNCATE photos RESTART IDENTITY CASCADE;')
    db.session.commit()
