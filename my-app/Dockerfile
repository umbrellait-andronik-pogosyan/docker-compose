FROM node:16

WORKDIR /usr/src/app/my-app

COPY package*.json ./

RUN npm install

EXPOSE $REACT_APP_PORT

CMD $ENV