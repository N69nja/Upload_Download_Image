from flask import Flask,request,jsonify,send_file
import os 
import requests
from flask_cors import CORS

app = Flask(__name__)
json_server_url='http://localhost:3000'
CORS(app)

def send_file_route(file):
    filename=f'./upload/{file}'
    if os.path.isfile(filename):
        return send_file(filename,mimetype='image/*')
    else:
        print(os.path.isfile(filename))
        return 'File not found',404

def generate_code(name):
    code = ''
    for char in name:
        code += str(ord(char))
    return code

@app.route("/",methods=['GET'])
def hello_world():
      return "<p>hello</p>"


@app.route("/upload",methods=['POST','GET'])
def upload():
    name=request.form['name']
    image=request.files['image']
    code=generate_code(name);
    data ={ 
        "id": f"{code}",
        "name": f"{name}",
        "filename":f"{image.filename}"
    }

    image.save(f"./upload/{image.filename}")
    requests.post(f'{json_server_url}/images',json=data)
    response =jsonify(message=f"{code}")
    return response


@app.route("/check",methods=['POST'])
def download():
    code=request.form['code']
    params={
        "id":f"{code}"

    }
    response =requests.get(f'{json_server_url}/images',params=params)
    data=response.json()
    if len(data)>0:
        file=data[0]['filename']
        return send_file_route(file)
    else:
        return 'File not found'

    

