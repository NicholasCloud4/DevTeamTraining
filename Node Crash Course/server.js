//Getting started open terminal in vs code and type node server

const http = require("http");
const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) =>{
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello World");
});

server.listen(PORT, HOSTNAME, () =>{
    console.log(`Server is runnning at http://${HOSTNAME}:${PORT}/`);
});

//checking file name and lcoation of file
console.log(__filename);
console.log(__dirname);