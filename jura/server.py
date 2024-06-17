#!/usr/bin/env python3
import _thread
import argparse

from chatterbot import ChatBot
from flask import (Flask, render_template, send_from_directory)

from websocketserver import *

app = Flask( __name__, static_folder='static/component' , static_url_path="")
CORS(app)
@app.route( '/' )
def home():
    return send_from_directory(app.static_folder, "index.html")
@app.route("/<path:path>")
def serv_file(path):
    return send_from_directory(app.static_folder, path)

@app.errorhandler( 404 )
def page_not_found( e ):
    return render_template( '404.html' ), 404

@app.errorhandler( 500 )
def server_error( e ):
    return render_template( '500.html' ), 500

@app.route('/favicon.ico')
def favicon():
    return app.send_static_file('favicon.ico')

@app.route('/media/school.jpg')
def bcg():
    return app.send_static_file('media/school.jpg')

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument( "--train", const=True, nargs='?', type=bool, help="Specify if the agent shoud be trained. If not specified agent will be started in default (listening) mode.")
    args = parser.parse_args()

    TRAIN = bool( args.train )

    chatbot = ChatBot( 'MICKO', read_only=not TRAIN )

    if TRAIN:
        from train import *
        train( chatbot )
        sys.exit()
        
    server = SimpleWebSocketServer( '0.0.0.0', 8000, NLPController )
    _thread.start_new_thread( server.serveforever, () )	
    app.run( host='0.0.0.0', debug=False )