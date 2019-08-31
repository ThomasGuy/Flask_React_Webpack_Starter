from flask import render_template

from . import bp

@bp.route("/api/ticker")
def ticker():
    title= 'BFX Tickers'
    return render_template('ticker/ticker.html', title=title)
