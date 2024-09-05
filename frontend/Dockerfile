# Usando uma imagem oficial do Node.js 20.14.0
FROM node:20.14.0

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar o arquivo package.json e package-lock.json para o contêiner
COPY package*.json ./

# Instalar as dependências do Node.js
RUN npm install

# Copiar todo o código do frontend para o contêiner
COPY . .

# Expor a porta 3000 para acessar o React
EXPOSE 3000

# Comando para rodar o React
CMD ["npm", "start"]
