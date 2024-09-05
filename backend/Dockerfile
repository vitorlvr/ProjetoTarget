# Usando uma imagem oficial do Python 3.12.3
FROM python:3.12.3-slim

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar o arquivo requirements.txt para o contêiner
COPY requirements.txt .

# Instalar as dependências do Python
RUN pip install --no-cache-dir -r requirements.txt

# Copiar todo o código da aplicação para o contêiner
COPY . .

# Expor a porta 5000 para acessar o Flask
EXPOSE 5000

# Definir a variável de ambiente para o Flask rodar no modo de desenvolvimento
ENV FLASK_ENV=development

# Comando para rodar o Flask
CMD ["flask", "run", "--host=0.0.0.0"]
