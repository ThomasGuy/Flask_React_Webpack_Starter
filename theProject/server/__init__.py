from flask import Flask, g
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session
from flask_redis import FlaskRedis


# Globally accessible libraries
db = SQLAlchemy()
red = FlaskRedis()


def create_app(Config):
    """Initialize the core application."""
    app = Flask(__name__,
                instance_relative_config=False,
                static_folder='../../theProject/client/static',
                )
    app.config.from_object(Config)

    # Initialize Plugins
    db.init_app(app)
    red.init_app(app)

    with app.app_context():
        from theProject.server.routes import bp as home_bp
        app.register_blueprint(home_bp)
        from theProject.server.data import bp as data_bp
        app.register_blueprint(data_bp)
        from theProject.server.errors import err
        app.register_blueprint(err)
        from theProject.server.tickers import bp as ticker_bp
        app.register_blueprint(ticker_bp)


        return app
