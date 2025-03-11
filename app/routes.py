from flask import Blueprint, render_template, redirect, request


main = Blueprint('main', __name__)


@main.route('/')
def view_index():
    return redirect('/pauta')

@main.route('/pauta')
def view_login():
    return render_template('pauta.html')