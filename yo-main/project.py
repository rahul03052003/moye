# Backend (Python, MySQL)
import mysql.connector as mysql
from flask import Flask, render_template, request, redirect, url_for

# Frontend (HTML, CSS, JS)
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/users')
def users():
    conn = mysql.connect(host="localhost", user="root", password="", database="tms")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    conn.close()
    return render_template('users.html', users=users)

# ... (other routes and functions)

if __name__ == '__main__':
    app.run(debug=True)
