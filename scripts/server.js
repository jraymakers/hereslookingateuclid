const fs = require('fs');
const http = require('http');
const path = require('path');

const args = process.argv.slice(2);

let dir = __dirname;
let port = 8080;

for (let i = 0, l = args.length; i < l; i++) {
  const arg = args[i];
  if (arg.startsWith('-')) {
    if (arg === '-p') {
      port = parseInt(args[++i], 10);
    }
  } else {
    dir = arg;
  }
}

const server = http.createServer((request, response) => {
  const url = request.url;
  console.log(url);
  const urlPath = url.split('?')[0];
  let mappedPath = urlPath;
  if (urlPath === '/') {
    mappedPath = '/index.html';
  }
  const filePath = path.join(dir, mappedPath);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(404).end();
    } else {
      response.writeHead(200).end(data);
    }
  });
});

server.listen(port);
console.log(`serving ${dir} at http://localhost:${port}`);
