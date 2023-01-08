const express = require("express");

const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

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

router.get("/add-product", (req, res, next) => {
    // console.log("In another middleware");

    res.sendFile(path.join(rootDir, "views", "add-product.html"));

    // res.send(
    //     '<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</form>'
    // );
});
// app.use('/') <- path를 지정해주게 되면 endpoint가 '/'로 시작되는 모든것들이 실행되는데, 이렇게 코드를 작성하면 원래라고 하면 아래에 있는 middleware도
// 실행되어야 하나, 위의 middleware에 next() 가 없으므로, 위에 middleware의 조건에 맞는 실행만 되고 아래로 내려가지 않는다. 그렇기 때문에 app.use('/')이 app.use('/add-product')보다 아래에 있는 이유이다.

// app.use 는 get,post 모두 반응하므로, app.get, app.post 로 원하는 요청에만 반응하도록 설정할수있다.(delete, put...)
router.post("/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;
