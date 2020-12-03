from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from datetime import datetime

import json
import binascii
import os
import boto3
from botocore.exceptions import ClientError
import uuid


auth_routes = Blueprint('auth', __name__)

s3 = boto3.resource('s3')
client = boto3.client('s3',
                      aws_access_key=os.environ.get('AWS_ACCESS_KEY')
                      aws_secret_access_key=os.environ.get('AWS_SECRET_ACCESS_KEY')
)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}, 401


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    print(request.get_json())
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/profile_pic/<id>', methods=["PUT"])
def profile_pic(id):
    """
    Edits profile picture
    """
    try:
        artist = Artist.query.get(id)
        profile_image_url = request.json["profile_image_url"]
        artist.profile_image_url = profile_image_url

        db.session.commit()
        return "Profile picture was successfully updated."
    except:
        return "Error updating profile picture."


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        key_list = request.files.keys()

    if request.files:
        if "profileImage" in key_list:
            profile_image_data = request.files["profileImage"] # what we are uploading
            profile_image_key = f"images/{profile_image_data.filename}_{uuid.uuid4()}" # name of key
            client.put_object(Body=profile_image_data, Bucket="kafei", Key=profile_image_key, ContentType=profile_image_data.mimetype, ACL="public-read")

        if "coverImage" in key_list:
          cover_image_data = request.files["coverImage"]
          cover_image_key = f"coverimage/{cover_image_data.filename}_{uuid.uuid4()}"
          client.put_object(Body=cover_image_data, Bucket="busker2", Key=cover_image_key, ContentType=cover_image_data.mimetype, ACL="public-read")

        user = User(
            fullName=form.data['fullName'],
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password'],
            profile_image_url=f"https://kafei.s3.amazonaws.com/{profile_image_key}" \
                                if "profileImage" in key_list else "",
            cover_image_url=f"https://kafei.s3.amazonaws.com/{cover_image_key}" \
                                if "coverImage" in key_list else "",
            tips=0
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
