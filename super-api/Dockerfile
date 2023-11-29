FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./prisma/

# Install app dependencies
RUN npm install

COPY . .

RUN npm run build
RUN npx prisma generate
RUN #npx prisma migrate deploy --schema=./prisma/schema.prisma
RUN npm prune --production

EXPOSE 3000

