from flask.cli import AppGroup
from .users import seed_users, undo_users
from .locations import seed_locations, undo_locations
from .posts import seed_posts, undo_posts
from .transactions import seed_transactions, undo_transactions
from .comments import seed_comments, undo_comments
from .photos import seed_photos, undo_photos
from .likes import seed_likes, undo_likes
from .tags import seed_tags, undo_tags
from .user_tags import seed_user_tags, undo_user_tags

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_locations()
    seed_posts()
    seed_transactions()
    seed_comments()
    seed_photos()
    seed_likes()
    seed_tags()
    seed_user_tags()

    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_user_tags()
    undo_tags()
    undo_likes()
    undo_photos()
    undo_comments()
    undo_transactions()
    undo_posts()
    undo_locations()
    undo_users()
    # Add other undo functions here
