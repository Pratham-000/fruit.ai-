from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

faqs = [
    {"id": 1, "question": "What is Fruit.ai?", "answer": "Fruit.ai is a platform where you can explore and purchase a variety of fresh fruits delivered straight to your door."},
    {"id": 2, "question": "How do I place an order?", "answer": "You can place an order by browsing our selection, adding fruits to your cart, and proceeding to checkout. You'll need to create an account or log in."}
]

@app.route('/faqs', methods=['GET'])
def get_faqs():
    return jsonify(faqs), 200

@app.route('/faqs/<int:id>', methods=['GET'])
def get_faq(id):
    faq = next((faq for faq in faqs if faq["id"] == id), None)
    if faq:
        return jsonify(faq), 200
    return jsonify({"error": "FAQ not found"}), 404

@app.route('/faqs', methods=['POST'])
def add_faq():
    new_faq = request.json
    new_id = max(faq["id"] for faq in faqs) + 1 if faqs else 1
    new_faq["id"] = new_id
    faqs.append(new_faq)
    return jsonify(new_faq), 201

@app.route('/faqs/<int:id>', methods=['PUT'])
def update_faq(id):
    updated_faq = request.json
    index = next((index for (index, faq) in enumerate(faqs) if faq["id"] == id), None)
    if index is not None:
        faqs[index] = {**faqs[index], **updated_faq}
        return jsonify(faqs[index]), 200
    return jsonify({"error": "FAQ not found"}), 404

@app.route('/faqs/<int:id>', methods=['DELETE'])
def delete_faq(id):
    global faqs
    faqs = [faq for faq in faqs if faq["id"] != id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
