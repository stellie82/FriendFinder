var http = require("http");
var fs = require("fs");
const express = require("express");
const app = express()

// Set port to 8080
var port = 8080;

// Create server
var server = http.createServer(handleRequest);

server.listen(port, function () {
    console.log("Port listening on PORT: " + port);
})

function handleRequest(req, res) {
    var path = req.url;
    switch (path) {
        case "/survey":
            return surveyPage(path, req, res);
        default:
            return welcomePage(path, req, res);
    }
}

function welcomePage(path, req, res) {
    readFile(__dirname + "/app/public/home.html", res);
}

function welcomePage(path, req, res) {
    readFile(__dirname + "/app/public/survey.html", res);
}

function readFile(pathName, res) {
    fs.readFile(pathName, function (err, data) {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("<html><head><title>Error</title></head><body><h1>There was an error!</h1></html>");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
}








// Starts our server
// server.listen(PORT, function() {
//   console.log("Server is listening on PORT: " + PORT);
// });

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

