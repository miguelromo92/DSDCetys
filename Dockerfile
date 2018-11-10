1  FROM node:8
2
3  WORKDIR /usr/src/app
4
5  COPY . .
6
7  EXPOSE 3000
8  CMD [ "node", "Employees_API.js" ]
