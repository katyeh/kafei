from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, Like
from sqlalchemy import and_

like_routes = Blueprint('likes', __name__)

