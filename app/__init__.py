import os

from flask import Flask, send_from_directory

from .routes import main


def create_app():
    app = Flask(__name__)

    @app.route('/favicon.ico')
    def favicon():
        print('imhere')
        return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico')
    
    app.register_blueprint(main)

    return app