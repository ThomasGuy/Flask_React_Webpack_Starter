from theProject.server import create_app, sockio
import config

app = create_app(config.DevConfig)


if __name__ == "__main__":
    from theProject.server.api import bfxData
    sockio.run(app, debug=True, port=5000)
