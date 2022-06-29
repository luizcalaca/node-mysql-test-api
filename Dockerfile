FROM node
WORKDIR /app
COPY ./src ./src
COPY package.json package-lock.json ./
RUN npm ci --production

ENV \
    APP_PORT=3000 \
    MYSQL_HOST=localhost \
    MYSQL_PORT=3306 \
    MYSQL_USER=root \
    MYSQL_PASSWORD=root

CMD [ "node", "src/index.js" ]