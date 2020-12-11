from werkzeug.security import generate_password_hash
from app.models import db, Location

def seed_locations():

    locations = [
        {
            'user_id': 1,
            'lat': '45.608013',
            'lng': '-112.335167'
        },
        {
            'user_id': 2,
            'lat': '47.608013',
            'lng': '-122.335167'
        },
        {
            'user_id': 3,
            'lat': '40.730610',
            'lng': '-73.935242',
        },
        {
            'user_id': 4,
            'lat': '37.773972',
            'lng': '-122.431297',
        },
        {
            'user_id': 5,
            'lat': '48.1167',
            'lng': '-53.7333',
        }
            'lat': 48.1167,
            'lng': -53.7333,
        },
        {
            'user_id': 6,
            'lat': 40.689247,
            'lng': -74.044502,
        },
        {
            'user_id': 7,
            'lat': 44.423691,
            'lng': -110.588516,
        },
        {
            'user_id': 8,
            'lat': 47.615556,
            'lng': -122.339444,
        },
        {
            'user_id': 9,
            'lat': 47.6371,
            'lng': -122.1237,
        },
        {
            'user_id': 10,
            'lat': 41.8781,
            'lng': 87.6298,
        },
        {
            'user_id': 11,
            'lat': 47.669660,
            'lng': -122.197370,
        },
        {
            'user_id': 12,
            'lat': 43.193851,
            'lng': -71.572395,
        },
        {
            'user_id': 13,
            'lat': 32.1924,
            'lng': 110.8753,
        },
        {
            'user_id': 14,
            'lat': 40.699215,
            'lng': -73.999039,
        },
        {
            'user_id': 15,
            'lat': 28.474386,
            'lng': -81.468193,
        },
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
