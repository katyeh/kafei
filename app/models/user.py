from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy.orm import relationship

followers = db.Table(
  "followers",
  db.Model.metadata,
  db.Column('followed_id', db.Integer, db.ForeignKey(
    "users.id"), primary_key=True), #followed
  db.Column('follower_id', db.Integer, db.ForeignKey(
    "users.id"), primary_key=True), #follower
)

class User(db.Model, UserMixin):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String(55), nullable=False, unique=True)
  username = db.Column(db.String(55), nullable=False, unique=True)
  email = db.Column(db.String(255), nullable=False, unique=True)
  bio = db.Column(db.String(255), nullable=True)
  hashed_password = db.Column(db.String(255), nullable = False)
  profile_image_url = db.Column(db.String(255), default="../images/kafei-logo.png")
  cover_image_url = db.Column(db.String(255), nullable=True)
  tips = db.Column(db.Integer, nullable=False)
  wallet = db.Column(db.Integer, nullable=False)

  # transactions = db.relationship("Transaction", cascade='all, delete', backref='user')

  following = db.relationship(
    'User', followers,
    primaryjoin=id == followers.c.follower_id,
    secondaryjoin=id == followers.c.followed_id,
    backref="followers"
  )

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    self.hashed_password = generate_password_hash(password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "username": self.username,
      "email": self.email,
      "bio": self.bio,
      "profile_image_url": self.profile_image_url,
      "cover_image_url": self.cover_image_url,
      "tips": self.tips,
      "wallet": self.wallet
    }

  def to_dict_full(self):
    return {
      "id": self.id,
      "name": self.name,
      "username": self.username,
      "email": self.email,
      "bio": self.bio,
      "profile_image_url": self.profile_image_url,
      "cover_image_url": self.cover_image_url,
      "tips": self.tips,
      "wallet": self.wallet,
      "followers": [follower.to_dict() for follower in self.followers],
      "following": [followed.to_dict() for followed in self.following]
    }
