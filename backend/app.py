from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import os

app = Flask(__name__)
CORS(app)
CSV_FILE = 'foods.csv'


def read_csv():
    if not os.path.exists(CSV_FILE):
        return []
    with open(CSV_FILE, mode='r') as file:
        reader = csv.DictReader(file)
        return list(reader)


def write_csv(foods):
    with open(CSV_FILE, mode='w', newline='') as file:
        fieldnames = ['id', 'name', 'category', 'calories']
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(foods)


@app.route('/api/foods', methods=['GET'])
def get_foods():
    foods = read_csv()
    return jsonify(foods)


@app.route('/api/foods', methods=['POST'])
def add_food():
    new_food = request.json
    foods = read_csv()
    new_food['id'] = str(len(foods) + 1)
    foods.append(new_food)
    write_csv(foods)
    return jsonify(new_food), 201


@app.route('/api/foods/<food_id>', methods=['PUT'])
def edit_food(food_id):
    updated_food = request.json
    foods = read_csv()
    for food in foods:
        if food['id'] == food_id:
            food.update(updated_food)
            break
    write_csv(foods)
    return jsonify(updated_food)


@app.route('/api/foods/<food_id>', methods=['DELETE'])
def delete_food(food_id):
    foods = read_csv()
    foods = [food for food in foods if food['id'] != food_id]
    write_csv(foods)
    return '', 204


   if __name__ == '__main__':
       port = int(os.environ.get('PORT', 5000))
       app.run(host='0.0.0.0', port=port)