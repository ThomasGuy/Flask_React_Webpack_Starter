from flask import Blueprint

bp = Blueprint('ticker', __name__)

from theProject.server.tickers import handler
