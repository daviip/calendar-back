FROM node:18

WORKDIR /app

COPY . /app

RUN npm install

ENV DB_CNN="mongodb+srv://david:David2002@calendar.7sk3ehi.mongodb.net/calendar" SECRET_JWT_SEED="Est0-Es-unA-w0DR-S3cRt4"

EXPOSE 4000

CMD npm start