FROM node:11-alpine

RUN mkdir -p /opt/frontend-app
WORKDIR /opt/frontend-app

COPY . /opt/frontend-app

RUN npm install --quiet

EXPOSE ${PORT}

CMD npm start