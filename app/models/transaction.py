from .db import db
from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column, ForeignKey


class Transaction(db.Model):
    __tablename__ = 'transactions'

    id = Column(Integer, primary_key=True)
    amount = Column(Integer, nullable=False)
    sender_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    recipient_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    sender = db.relationship(
        "User", backref="transaction", foreign_keys=[sender_id])
    # recipient_id = db.relationship("User", foreign_keys=[recipient_id])

    def to_dict(self):
        return {
            "id": self.id,
            "amount": self.amount,
            "sender_id": self.sender_id,
            "recipient_id": self.recipient_id,
            "sender": self.sender.to_dict(),
            "comments": [comment.to_dict() for comment in self.comments]
        }
