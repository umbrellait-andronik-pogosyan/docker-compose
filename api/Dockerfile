FROM node:16

WORKDIR /usr/src/app/api

COPY package*.json ./

RUN npm install

EXPOSE $BACK

CMD $BACK_COMMAND