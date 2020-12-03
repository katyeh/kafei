from .db import db
from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column, ForeignKey

class Comment(db.Model):
    __tablename__ = 'comments'

    id = Column(Integer, primary_key=True)
    body = Column(String, nullable=True)
    sender_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    recipient_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    transaction_id = Column(Integer, ForeignKey("transactions.id"), nullable=True)
    post_id = Column(Integer, ForeignKey("posts.id"), nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "sender_id": self.sender_id,
            "recipient_id": self.recipient_id,
            "transaction_id": self.transaction_id,
            "post_id": self.post_id
        }
