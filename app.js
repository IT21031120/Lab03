// console.log("Hello World");
// console.log("This is the first lab");

//Read File
const fs = require('fs');
fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
})

//Write to file
fs.writeFile('file.txt', "Hello world!!", function (err) {
    if (err) throw err;
    console.log("File Saved");
})