const http = require("http");

const routes = require("./routes");

console.log(routes.someText);

// ./http.js => search http file in local
// const(변경될일 없음)

// http.createServer(function (req, res) {})

// http.createServer((req, res) => {});
// 이 상태로 실행하면 실행이 되지 않는다. const(변경될일 없음.) 라는 변수에 담아서 실행하자.
// node는 req(요청)을 받은 후에 중지시켜주지 않으면 계속 지속된다.
const server = http.createServer(routes.handler);

server.listen(3001);

// adding middleware

// const http = require('http');

// const express = require('express');

// const app = express();

// app.use((req, res, next) => {
//     console.log('In the middleware!');
//     next(); // Allows the request to continue to the next middleware in line
// });

// app.use((req, res, next) => {
//     console.log('In another middleware!');
//     res.send('<h1>Hello from Express!</h1>');
// });

// const server = http.createServer(app);

// server.listen(3000);
