// const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
// form 으로 req에 들어오는 body를 추출하기 위해 npm에서 body-parser 라는 패키지 install이 필요하다.

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404error.html"));
});
// 잘못된 endpoint 입력시 404 error -> Not found 발생
app.listen(3001);

// const server = http.createServer(app);

// server.listen(3001);
