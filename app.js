// console.log("Hello World");
// console.log("This is the first lab");

//Read File
const fs = require('fs');
const { request } = require('http');
const { type } = require('os');
fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
})

//Write to file
fs.writeFile('file.txt', "Hello world!!", function (err) {
    if (err) throw err;
    console.log("File Saved");
})

//Creating A Web Server
const http = request("http");
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write("Hello World!!");
    res.end();
}).listen(8080);