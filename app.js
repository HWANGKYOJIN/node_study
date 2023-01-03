// const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// form 으로 req에 들어오는 body를 추출하기 위해 npm에서 body-parser 라는 패키지 install이 필요하다.

// app.use((req, res, next) => {
// console.log("In the middleware");
// next();
// next()를 붙여줘야 다음 middleware로 넘어간다. next()가 없으면 넘어가지 않는다.
// next() 대신에 res을 전송하면 다음 middleware로 진입하지 않는다.
// });

// app.use((req, res, next) => {
//     console.log("The allways print!");
//     next();
// });
// 항상 실행되는 middleware를 추가 할 수 있다.

app.use("/add-product", (req, res, next) => {
    // console.log("In another middleware");
    res.send(
        '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</form>'
    );
});
// app.use('/') <- path를 지정해주게 되면 endpoint가 '/'로 시작되는 모든것들이 실행되는데, 이렇게 코드를 작성하면 원래라고 하면 아래에 있는 middleware도
// 실행되어야 하나, 위의 middleware에 next() 가 없으므로, 위에 middleware의 조건에 맞는 실행만 되고 아래로 내려가지 않는다. 그렇기 때문에 app.use('/')이 app.use('/add-product')보다 아래에 있는 이유이다.

app.use("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

app.use("/", (req, res, next) => {
    // console.log("In another middleware");
    res.send("<h1>Hello from Express!</h1>");
    // Headers에 Content-Type: text/html; charset=utf-8 을 자동으로 설정해준다. express 내장 기능.
});

app.listen(3001);

// const server = http.createServer(app);

// server.listen(3001);
