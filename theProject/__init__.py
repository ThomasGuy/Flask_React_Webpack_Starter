from flask import Flask, g
from flask_sqlalchemy import SQLAlchemy
from flask_session import Session
from flask_redis import FlaskRedis
# from flask_cors import CORS

# Globally accessible libraries
db = SQLAlchemy()
red = FlaskRedis()


def create_app():
    """Initialize the core application."""
    app = Flask(__name__,
                instance_relative_config=False,
                static_url_path='/static')
    app.config.from_object('config.DevConfig')

    # Initialize Plugins
    db.init_app(app)
    red.init_app(app)

    with app.app_context():
        # Include our Routes
        from theProject.routes import home

        # Register Blueprints
        app.register_blueprint(home.bp)

        return app
