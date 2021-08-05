// 1. http 모듈을 불러오자
const http = require('http');



// 2. 서버를 만들자
const server = http.createServer((req, res) => {
    // console.log(req);
    // res.end();
    const url = req.url
    if (url === '/index'){
        res.setHeader('Context-Type', 'text/html');
        res.write('hellow');
        
    }
    
  });
server.listen(3000);
