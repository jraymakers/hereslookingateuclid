const fs = require('fs');
const http = require('http');
const path = require('path');

const args = process.argv.slice(2);

let dir = process.cwd();;
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

const pathMappings = {
  '/': '/index.html'
};

const contentTypeForExtension = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((request, response) => {
  const url = request.url;
  const urlPath = url.split('?')[0];
  const mappedPath = pathMappings[urlPath] || urlPath;
  const filePath = path.join(dir, mappedPath);
  const extension = path.extname(filePath);
  const contentType = contentTypeForExtension[extension];
  console.log(`${url} -> ${filePath} (${contentType})`);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      response.writeHead(404).end();
    } else {
      response.writeHead(200, {
        'Content-Type': contentType,
      }).end(data);
    }
  });
});

server.listen(port);
console.log(`serving ${dir} at http://localhost:${port}`);
