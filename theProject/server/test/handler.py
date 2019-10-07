from flask import render_template

from . import bp


@bp.route("/api/test")
def ticker():
    title = 'Test SocketIO'
    return render_template('test/test.html', title=title)
