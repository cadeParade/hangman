from flask import Flask, request, session, render_template, g, redirect, url_for, flash
# import model
import jinja2
import os

app = Flask(__name__)
app.secret_key = '\xf5!\x07!qj\xa4\x08\xc6\xf8\n\x8a\x95m\xe2\x04g\xbb\x98|U\xa2f\x03'
app.jinja_env.undefined = jinja2.StrictUndefined

@app.route("/")
def index():
    """This is the 'cover' page of the ubermelon site"""
    return render_template("index.html")

@app.route("/handle_guess")
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True, port=port)
