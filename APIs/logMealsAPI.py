import base64
import os
import json
import requests
from PIL import Image
from flask import Flask, request
from flask_cors import CORS
from markupsafe import escape

IMG_PATH = 'current.jpg'
app = Flask(__name__)
CORS(app)

# cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/', methods=['POST', 'GET'])
def index():
    if request.method == 'GET':
        print('get ur mom')
    else:
        print('post ur mom')

    with open(IMG_PATH, "wb") as fh:
        fh.write(base64.decodebytes(request.data))

    api_user_token = 'cd2d2bc174b0e2df2c0258ed987ba71f3a8777a1'
    headers = {'Authorization': 'Bearer ' + api_user_token}

    # Single/Several Dishes Detection
    url = 'https://api.logmeal.es/v2/recognition/complete'

    resp = requests.post(
        url, files={'image': open(IMG_PATH, 'rb')}, headers=headers)
    print("First print", resp.json())

    # # Ingredients information
    # url = 'https://api.logmeal.es/v2/recipe/ingredients'
    # resp = requests.post(url, json={'imageId': resp.json()[
    #                      'imageId']}, headers=headers)

    # print("Second print", resp.json())  # display ingredients info
    return {'results': [x['name'] for x in resp.json()['recognition_results'] if x['prob'] > 0.1]}


Flask.run(app, port=8000)
