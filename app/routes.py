from flask import Blueprint, render_template, redirect, jsonify, request


main = Blueprint('main', __name__)


@main.route('/')
def view_index():
    return redirect('/pauta')

@main.route('/pauta')
def view_login():
    return render_template('pauta.html')

@main.route('/noticias')
def noticias():
    noticias_mock = [
        {
            "noticia_id": 'id-1',
            "titulo_pt": "Notícia 1 Notícia 1 Notícia 1 Notícia 1 Notícia 1 Notícia 1 Notícia 1 Notícia 1",
            "resumo_pt": "Resumo notícia 1",
            "link": "http://example.com/noticia1",
            "fonte": "Fonte1",
            "publicacao": "12/03/2025",
        },

        {
            "noticia_id": 'id-2',
            "titulo_pt": "Notícia 2",
            "resumo_pt": "Resumo notícia 2",
            "link": "http://example.com/noticia2",
            "fonte": "Fonte2",
            "publicacao": "12/03/2025",
        },

        {
            "noticia_id": 'id-3',
            "titulo_pt": "Notícia 3",
            "resumo_pt": "Resumo notícia 3",
            "link": "http://example.com/noticia3",
            "fonte": "Fonte3",
            "publicacao": "12/03/2025",
        }
    ]

    return jsonify(noticias_mock)

@main.route('/fechar-pauta', methods=['POST'])
def fechar_pauta():
    try:
        # Obter os dados JSON enviados pelo frontend
        dados = request.get_json()

        # Fazer algo com os dados (simplesmente retornando como resposta)
        print("Dados recebidos:", dados)

        return jsonify({"mensagem": "Dados recebidos com sucesso!"}), 200

    except Exception as e:
        return jsonify({"erro": str(e)}), 400