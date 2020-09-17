FROM node:14.10.1-alpine3.12
WORKDIR /app
COPY package*.json /app/
RUN npm i
RUN npm i -g gulp
COPY . /app/
EXPOSE 8283
EXPOSE 3001
