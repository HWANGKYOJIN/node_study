const http = require("http");
// ./http.js => search http file in local
// const(변경될일 없음)

// http.createServer(function (req, res) {})

// http.createServer((req, res) => {});
// 이 상태로 실행하면 실행이 되지 않는다. const(변경될일 없음.) 라는 변수에 담아서 실행하자.

const server = http.createServer(
    // node는 req(요청)을 받은 후에 중지시켜주지 않으면 계속 지속된다.
    (req, res) => {
        console.log(req.url, req.method, req.headers);
        // 데이터 요청 url = /, method = "GET", headers = {} <-- metadata
        // process.exit();
        // process.exit()을 활용하면 요청을 받고 process를 종료시킨다.
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>My First Page</head></title>");
        res.write("<body><h1>Hello from my Node.js Server!</body></h1>");
        res.write("</html>");
        res.end();
        // res.end()로 닫아준다.
    }
);

server.listen(3001);
