const http = require('http');
const url = require('url');
const details = require('./controller/index');

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/favicon.ico') {
    res.statusCode = 204;
    res.end();
    return;
  }
  if(req.url === '/details'){
    var data = details(req, res)
    res.statusCode = 200;
    res.end(JSON.stringify(data))
    return;
  }
  const queryParams = url.parse(req.url, true).query;
  console.log('Query Parameters:', queryParams);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (queryParams.name) {
    res.end(`Hello, ${queryParams.name}!\n`);
  } else {
    res.end('Hello, World!\n');
  }
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
