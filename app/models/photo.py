from .db import db
from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.orm import relationship


class Photo(db.Model):
    __tablename__ = 'photos'

    id = Column(Integer, primary_key=True)
    pic_url = Column(String, nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)

    # likes = db.relationship('Like', cascade='all, delete', backref='photo')

    def to_dict(self):
        return {
            "id": self.id,
            "pic_url": self.pic_url,
            "user_id": self.user_id,
        }
