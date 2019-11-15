var http = require("http");
var fs = require("fs");
var express = require("express");
var app = express();

// Set port to 3000
var PORT = process.env.PORT || 3000;

// Create server
var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Port listening on PORT: " + PORT);
})

function handleRequest(req, res) {
    var path = req.url;
    switch (path) {
        case "/results":
            return resultsPage(path, req, res);
        case "/survey":
            return surveyPage(path, req, res);
        default:
            return welcomePage(path, req, res);
    }
}

function welcomePage(path, req, res) {
    readFile(__dirname + "/app/public/home.html", res);
}

function surveyPage(path, req, res) {
    readFile(__dirname + "/app/public/survey.html", res);
}

function resultsPage(path, req, res) {
    readFile(__dirname + "/app/public/results.html", res);
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


app.get("/", function (req, res) {
    res.json(path.join(__dirname, "/app/public/home.html"));
});






// Starts our server
// server.listen(PORT, function() {
//   console.log("Server is listening on PORT: " + PORT);
// });

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

