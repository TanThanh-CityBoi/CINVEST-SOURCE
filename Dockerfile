FROM node:16.17-alpine

WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

ENV NODE_ENV=development

EXPOSE 4000

CMD ["node", "dist/main.js"]
