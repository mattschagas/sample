from flask import Flask, render_template, flash

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def main():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(Debug=True)