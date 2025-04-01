// HTTPS CONFIG

import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

let server;
if (isProduction) {
  server = http.createServer(function (req, res) {
    handleRequest(req, res);
  });
} else {
  const options = {
    key: fs.readFileSync(path.join(__dirname, 'localhost+2-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'localhost+2.pem'))
  };
  server = https.createServer(options, function (req, res) {
    handleRequest(req, res);
  });
}

function handleRequest(req, res) {
  let filePath = path.join(__dirname, req.url);
  if (filePath === path.join(__dirname, '/')) {
    filePath = path.join(__dirname, 'test-embed.html');
  }

  const extname = path.extname(filePath);
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
  }

  fs.readFile(filePath, function(error, content) {
    if (error) {
      if(error.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        res.writeHead(500);
        res.end('Server error: ' + error.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}

const port = process.env.PORT || 8443;

server.listen(port, () => {
  console.log(`${isProduction ? 'HTTP' : 'HTTPS'} Server running at ${isProduction ? 'http' : 'https'}://localhost:${port}/`);
}); 