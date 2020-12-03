from flask import Blueprint, redirect, jsonify, request
from app.models import db, User

search_routes = Blueprint("search", __name__)

@search_routes.route("/search/tracks", methods=["GET", "POST"])
def search():
    keyword = request.args.get('searchterm')
    # print(request.args)
    userresults = User.query.filter(User.fullName.ilike(f"%{keyword}%") |
                                    User.username.ilike(f"%{keyword}%") |
                                    User.email.ilike(f"%{keyword}%")
                                    ).all()

    return jsonify(userresults = [{'id': userresult.id, 'name': userresult.name, 'username': userresult.username, 'email': userresult.email} for userresult in userresults])
