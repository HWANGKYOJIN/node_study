const express = require("express");

const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "shop.html"));
    // path.join(__dirname, <-- dirname은 지금 이 파일이 실행되는 위치(routes), views 내가 들어가고 싶은 폴더, shop.html <-- 원하는 파일)
    // res.sendFile("/views/"); <-- 작동하지 않는다. 리눅스 /views/uer or 윈도우 \viesw\user 를 사용.
    // res.send("<h1>Hello from Express!</h1>");
    // Headers에 Content-Type: text/html; charset=utf-8 을 자동으로 설정해준다. express 내장 기능.
});

module.exports = router;
