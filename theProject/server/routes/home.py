from flask import render_template, Blueprint
from theProject.server.api.getData import getData

bp = Blueprint('home', __name__)

@bp.route("/")
@bp.route("/api")
@bp.route("/api/home")
def home():
    title  = 'Home'
    return render_template('index.html', title=title)
