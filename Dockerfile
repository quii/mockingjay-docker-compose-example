FROM node:5.0.0-onbuild

RUN npm install -g nodemon

RUN npm install

EXPOSE 8080