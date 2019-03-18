const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url')

const mediaTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
}

const server = http.createServer();

server.on('request', (req, res) => {
  //
  console.log("user made request" + req.url);
  res.writeHead(200, {
    "Context-Type": "text/plain"
  });
  res.write("something");
  res.end();
})

server.listen(8888);

console.log("Server is now runing");  