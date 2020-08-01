FROM node:8
WORKDIR /usr/src/app
RUN npm install express
RUN npm install mongoose
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]
