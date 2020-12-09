from flask_wtf import FlaskForm
from wtforms import StringField, FileField, BooleanField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User, Post


class PostForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    body = StringField('body')
