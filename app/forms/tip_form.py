from flask_wtf import FlaskForm
from wtforms import StringField, FileField, BooleanField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class TipForm(FlaskForm):
    amount = IntegerField('amount', validators=[DataRequired()])
    sender_id = IntegerField('sender_id', validators=[DataRequired()])
    recipient_id = IntegerField('recipient_id', validators=[DataRequired()])
    body = StringField('body')
    transaction_id = IntegerField('transaction_id')
