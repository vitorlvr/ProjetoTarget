from flask import Blueprint, request, jsonify
from models import db, Tarefa, Usuario
from werkzeug.security import generate_password_hash, check_password_hash

tarefa_bp = Blueprint('tarefa_bp', __name__)
usuario_bp = Blueprint('usuario_bp', __name__)

# Rotas de Tarefas
@tarefa_bp.route('/', methods=['GET'])
def home():
    return jsonify({'message': 'API de Gerenciamento de Tarefas'}), 200

@tarefa_bp.route('/tarefas', methods=['GET'])
def get_tarefas():
    tarefas = Tarefa.query.all()
    return jsonify([tarefa.as_dict() for tarefa in tarefas])

@tarefa_bp.route('/tarefa', methods=['POST'])
def create_tarefa():
    data = request.get_json()
    nova_tarefa = Tarefa(
        titulo=data['titulo'],
        descricao=data.get('descricao', ''),
        status=data.get('status', 'pendente')
    )
    db.session.add(nova_tarefa)
    db.session.commit()
    return jsonify(nova_tarefa.as_dict()), 201

@tarefa_bp.route('/tarefa/<int:id>', methods=['PUT'])
def update_tarefa(id):
    data = request.get_json()
    tarefa = Tarefa.query.get(id)
    if tarefa is None:
        return jsonify({'error': 'Tarefa não encontrada'}), 404

    tarefa.titulo = data['titulo']
    tarefa.descricao = data.get('descricao', tarefa.descricao)
    tarefa.status = data.get('status', tarefa.status)
    db.session.commit()
    return jsonify(tarefa.as_dict())

@tarefa_bp.route('/tarefa/<int:id>', methods=['DELETE'])
def delete_tarefa(id):
    tarefa = Tarefa.query.get(id)
    if tarefa is None:
        return jsonify({'error': 'Tarefa não encontrada'}), 404

    db.session.delete(tarefa)
    db.session.commit()
    return '', 204

# Rotas de Usuários
@usuario_bp.route('/usuarios', methods=['POST'])
def create_usuario():
    data = request.get_json()
    hashed_password = generate_password_hash(data['senha'], method='sha256')
    novo_usuario = Usuario(
        nome=data['nome'],
        email=data['email'],
        senha=hashed_password
    )
    db.session.add(novo_usuario)
    db.session.commit()
    return jsonify(novo_usuario.as_dict()), 201

@usuario_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    usuario = Usuario.query.filter_by(email=data['email']).first()

    if usuario and check_password_hash(usuario.senha, data['senha']):
        return jsonify({'message': 'Login realizado com sucesso!'}), 200
    else:
        return jsonify({'error': 'Credenciais inválidas'}), 401
