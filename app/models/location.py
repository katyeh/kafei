from .db import db
from sqlalchemy.types import Integer, Numeric
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.orm import relationship


class Location(db.Model):
    __tablename__ = 'locations'

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    lat = Column(Numeric, nullable=False)
    lng = Column(Numeric, nullable=False)

    user = db.relationship("User", backref="locations", foreign_keys=[user_id])

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "lat": self.lat,
            "lng": self.lng
        }
