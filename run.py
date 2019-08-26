from theProject import create_app
from flask_cors import CORS, cross_origin

app = create_app()
CORS(app, origins="http://localhost:5000", allow_headers=[
    "Content-Type", "Authorization", "Access-Control-Allow-Credentials"],
    supports_credentials=True, intercept_exceptions=False)

if __name__ == "__main__":
    app.run(host='localhost', port=5000, debug=True)
