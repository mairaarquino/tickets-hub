FROM node:18

WORKDIR /tickets-api
COPY package.json .
COPY prisma ./prisma/
RUN npm install
COPY . .
EXPOSE 8080
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]