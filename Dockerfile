FROM node:11-alpine

RUN mkdir -p /opt/frontend-app
WORKDIR /opt/frontend-app

COPY package.json .
RUN npm install --quiet

COPY . .

EXPOSE ${PORT}

CMD npm start