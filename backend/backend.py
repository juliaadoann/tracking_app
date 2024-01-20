# backend.py

import os
from pymongo import MongoClient
from flask import Flask
import uuid
from flask import request
from flask_cors import CORS
import json

app = Flask(__name__)
client = MongoClient("mongodb://localhost:27012/")
db = client["userdb"]

CORS(app)

def user_exists(email, password):
    query = list(db.users.find({'email': email, 'password': password}))
    return len(query) != 0

@app.route('/api/signup', methods=['POST'])
def user_create():
    form = json.loads(request.data)

    first_name = form["firstName"]
    last_name = form["lastName"]
    password = form["password"]
    email = form["email"]

    if (user_exists(email, password)):
        return { 'success': False, "message": "user already exists" }

    user_id = str(uuid.uuid4())
    db.users.insert_one({ 'user_id': user_id, 'first_name': first_name, 'last_name': last_name, 'email': email, 'password': password })

    return { 'success': True }
    
@app.route('/api/login', methods=['POST'])
def user_login():

    form = json.loads(request.data)
    email = form["email"]
    password = form["password"]

    exists = user_exists(email, password)

    if (exists):
        return { 'success': True }

    return { 'success': False, 'message': 'user not found' }

if __name__ == "__main__":

    server_port = int(os.environ.get("PORT", 5001)) 
    app.run(debug=False, host="0.0.0.0", port=server_port)
    