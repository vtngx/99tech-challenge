FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn

COPY . .

RUN npm install -g ts-node-dev

EXPOSE 3000

CMD ["yarn", "dev"]