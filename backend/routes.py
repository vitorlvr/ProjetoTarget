from flask import Blueprint, jsonify, request
from models import db, Tarefa, Usuario
from werkzeug.security import generate_password_hash, check_password_hash
from functools import wraps

api = Blueprint('api', __name__)

# Rotas para CRUD de Tarefas
@api.route('/tarefas', methods=['POST'])
def criar_tarefa():
    dados = request.json
    nova_tarefa = Tarefa(titulo=dados['titulo'], descricao=dados['descricao'])
    db.session.add(nova_tarefa)
    db.session.commit()
    return jsonify({'mensagem': 'Tarefa criada com sucesso'}), 201

@api.route('/tarefas', methods=['GET'])
def listar_tarefas():
    tarefas = Tarefa.query.all()
    return jsonify([{'id': t.id, 'titulo': t.titulo, 'descricao': t.descricao, 'status': t.status, 'data_criacao': t.data_criacao} for t in tarefas])

# Rotas de Autenticação e Usuários
@api.route('/usuarios', methods=['POST'])
def criar_usuario():
    dados = request.json
    senha_hash = generate_password_hash(dados['senha'])
    novo_usuario = Usuario(nome=dados['nome'], email=dados['email'], senha=senha_hash)
    db.session.add(novo_usuario)
    db.session.commit()
    return jsonify({'mensagem': 'Usuário criado com sucesso'}), 201
