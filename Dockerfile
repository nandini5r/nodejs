FROM node:16.20.1-alpine

WORKDIR /app/test

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=3001

EXPOSE 3001

CMD ["npm" ,"start"]