FROM node:20

WORKDIR /app

COPY package*.json /app

RUN npm cache clean \
    rm -rf node_modules \
    npm install

COPY . /app

EXPOSE 3000