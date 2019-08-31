from flask import Blueprint

err = Blueprint('errors', __name__)

from theProject.server.errors import handler
