from flask import Blueprint, jsonify, session, request
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

auth_routes = Blueprint('auth', __name__)


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


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        key_list = request.files.keys()

        user = User(
            fullName=form.data['fullName'],
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password'],
            profile_image_url=form.data['profile_image_url']
                if "profileImage" in key_list else "../images/kafei-logo.png",
            cover_image_url=form.data['cover_image_url'],
            tips=0,
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


@auth_routes.route('/<int:id>/profile_pic', methods=["PUT"])
@login_required
def profile_pic(id):
    try:
        user = User.query.get(id)
        profile_image_url = request.json["profile_image_url"]
        user.profile_image_url = profile_image_url

        db.session.commit()
        return "Profile picture was successfully updated."
    except:
        return "Error updating profile picture."


@auth_routes.route('/<int:id>/cover_pic', methods=["PUT"])
@login_required
def cover_pic(id):
    try:
        user = User.query.get(id)
        cover_image_url = request.json["cover_image_url"]
        user.cover_image_url = cover_image_url

        db.session.commit()
        return "Cover image was successfully updated."
    except:
        return "Error updating cover image."


@auth_routes.route('/<int:id>', methods=["DELETE"])
# @login_required
def delete_user(id):
    try:
        user = User.query.get(id)
        db.session.delete(user)
        db.session.commit()
        return "User was successfully deleted."
    except:
        return jsonify(errors = f"Error deleting the user.")
