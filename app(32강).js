const http = require("http");
// ./http.js => search http file in local
// const(변경될일 없음)

// http.createServer(function (req, res) {})

// http.createServer((req, res) => {});
// 이 상태로 실행하면 실행이 되지 않는다. const(변경될일 없음.) 라는 변수에 담아서 실행하자.
// node는 req(요청)을 받은 후에 중지시켜주지 않으면 계속 지속된다.
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write(
            "<body><form action='/message'method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
        );
        // /message로 이동하고, message를 입력할수있는 input button(send)를 만든다.
        res.write("</html>");
        return res.end();
        // 위에 내용이 맞으면 return 으로 끊어줘야 아래로 안넘어간다.
    }
    // console.log(req.url, req.method, req.headers);
    // 데이터 요청 url = /, method = "GET", headers = {} <-- metadata
    // process.exit();
    // process.exit()을 활용하면 요청을 받고 process를 종료시킨다.
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
    // res.end()로 닫아준다.
});

server.listen(3001);
