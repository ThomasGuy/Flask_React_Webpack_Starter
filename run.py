from theProject.server import create_app
from flask import Flask
import config

app = create_app(config.DevConfig)


if __name__ == "__main__":
    print(app.instance_path)
    app.run(host='localhost', port=5000)
