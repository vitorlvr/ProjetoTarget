# Projeto Target Solutions

Projeto desenvolvido para o processo seletivo de estágio na empresa Target Solutions. Este sistema de gerenciamento de tarefas permite a criação, visualização, edição e exclusão de tarefas usando um frontend em React, um backend em Flask e o banco de dados utilizando SQLAlchemy.

## Requisitos

Para esse projeto, é necessário ter o Node.js instalado para o frontend (utilizei a versão 20.14.0) e Python 3.12.3 ou superior com Flask para o backend.

## Para Executar

### Backend

1. Navegue até o diretório do backend.

    `cd .\backend\`

2. Instale os frameworks utilizados no python:

    `pip install -r requirements.txt`

2. Execute o servidor Flask com:

    `flask run`

   O backend estará disponível em `http://localhost:5000`.

### Frontend

1. Navegue até o diretório do frontend.

    `cd .\frontend\`

2. Instale as dependências com:

    `npm install`

3. Inicie o servidor React com:

    `npm run start`

   O frontend estará disponível em `http://localhost:3000`


## Decisões Tomadas

- **API REST**: Optou-se por utilizar uma API REST para garantir uma comunicação clara e eficiente entre o frontend e o backend.

- **Frontend com React**: O React foi escolhido para o desenvolvimento do frontend devido à sua capacidade de criar interfaces de usuário dinâmicas.

- **Backend com Flask e SQLAlchemy**: Flask foi escolhido para o backend por ser leve e fácil de usar. Ele é um microframework em Python que facilita a criação rápida de APIs RESTful. Para gerenciar o banco de dados, utilizei o SQLAlchemy. Ele simplifica a interação com o banco de dados, permitindo que trabalhe com dados usando objetos Python em vez de escrever muito código SQL.

- **Integração com Docker**: Para facilitar o ambiente de desenvolvimento e garantir que o sistema funcione em qualquer máquina, foi utilizado o Docker. Cada componente (frontend e backend) está contêinerizado, permitindo que sejam executados de maneira independente e isolada. O Docker Compose foi utilizado para orquestrar ambos os serviços, assegurando uma configuração simples e padronizada para a execução do projeto.