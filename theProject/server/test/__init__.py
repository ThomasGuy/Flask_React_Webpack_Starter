from flask import Blueprint

bp = Blueprint('test', __name__)

from theProject.server.test import handler
