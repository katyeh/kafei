from werkzeug.security import generate_password_hash
from app.models import db, Location

def seed_locations():

    locations = [
        {
            'user_id': 2,
            'lat': 47.608013,
            'lng': -122.335167
        },
        {
            'user_id': 3,
            'lat': 40.730610,
            'lng': -73.935242,
        },
        {
            'user_id': 4,
            'lat': 37.773972,
            'lng': -122.431297,
        },
        {
            'user_id': 5,
            'lat': 48.1167,
            'lng': -53.7333,
        }
    ]

    locations_list = [Location(user_id=item['user_id'],
                               lat=item['lat'],
                               lng=item['lng'])
                      for item in locations]

    db.session.add_all(locations_list)

    db.session.commit()


def undo_locations():
    db.session.execute('TRUNCATE locations RESTART IDENTITY CASCADE;')
    db.session.commit()
