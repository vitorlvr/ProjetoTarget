from flask import Flask
from config import Config
from models import db
from routes import tarefa_bp, usuario_bp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config.from_object(Config)

db.init_app(app)

app.register_blueprint(tarefa_bp, url_prefix='/')
app.register_blueprint(usuario_bp, url_prefix='/')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
