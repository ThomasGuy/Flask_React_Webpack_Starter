from flask import Blueprint

bp = Blueprint('home', __name__)

from theProject.server.routes import home
