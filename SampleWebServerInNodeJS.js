/*
Practical

Copy code from the slide to a file named myserver.js and from the same
folder in terminal execute the following command to start node server:

node myserver.js
*/

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});


server.listen(port, hostname, () => {
    console.log('Server running at http://' + hostname + ':' + port + '/');
});

