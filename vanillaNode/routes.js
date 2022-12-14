const fs = require("fs");
// fs = fileSystem (파일을 만들고 그 내용을 저장할 때 쓴다.)
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    // console.log(method);
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
    if (url === "/message" && method === "POST") {
        // 1. 우선 해당 조건문에 해당되면,if문 이하의 함수들을 레지스트리에 저장 한다.
        const body = [];
        req.on("data", (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split("=")[1];
            // const message = parsedBody.split("=")[0]; <-- error code
            // breakPoin 활용하여 debug 연습
            // console.log(message);
            fs.writeFile("message.text", message, (err) => {
                // writeFileSync. && writeFile 차이점 알아보기
                res.statusCode = 302;
                // URL 리디렉션을 수행하는 일반적인 방법입니다.
                res.setHeader("Location", "/");
                // 기본 Header 설정
                return res.end();
                // 아래 코드가 실행되지 않게 return res.end();
            });
        });
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
    // res.end()로 닫아준다.
};

// nodejs에서 exports 하는 방법
// module.exports = requestHandler;
// module.exports = {
//     handler: requestHandler,
//     someText: "Write Cord Here",
// };

// module.exports.handler = requestHandler;
// module.exports.someText = "Write Cord Here";

exports.handler = requestHandler;
exports.someText = "Write Cord Here";
