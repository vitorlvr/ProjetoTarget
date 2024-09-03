import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'minha_chave_secreta'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'postgresql://postgres:senha@localhost/tarefasdb'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
