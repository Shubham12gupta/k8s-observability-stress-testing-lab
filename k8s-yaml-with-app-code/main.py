from flask import Flask
import time

app = Flask(__name__)

@app.route("/")
def home():
    time.sleep(0.1)  # simulate processing delay
    return "Hello from Kubernetes stress test!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
