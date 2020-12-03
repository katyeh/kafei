from .db import db
from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column, ForeignKey

class Follower(db.Model):
    __tablename__ = 'followers'

    id = Column(Integer, primary_key=True)
    follower_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    followed_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    follower = db.relationship('User', foreign_keys=[follower_id])
    following = db.relationship('User', foreign_keys=[followed_id])

    user = db.relationship("User", cascade="all, delete", backref="follower", foreign_keys=[follower_id])
    followed_users = db.relationship("User", cascade="all, delete", backref="followed_users", foreign_keys=[followed_id])


    def to_dict(self):
        return {
            "id": self.id,
            "follower_id": self.follower_id,
            "followed_id": self.followed_id,
            "user": {
                "id": self.user.id,
                "fullName": self.user.fullName,
                "username": self.user.username
            },
            "followed_users": self.following.to_dict()
        }
