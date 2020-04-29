FROM node:10.13-alpine
RUN mkdir app
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 3000 
CMD node app.js