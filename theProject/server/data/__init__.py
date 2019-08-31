from flask import Blueprint

bp = Blueprint('data', __name__)

from theProject.server.data import handler
