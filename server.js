// Required files
var express = require("express");
var path = require("path");
var fs = require("fs");
var questionList = require("./app/data/questions.js");
var friendsList = require("./app/data/friends.js");

// Set up Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
// Route to the homepage
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/friends", function (req, res) {
    return res.json(friendsList);
});

app.get("/api/questions", function (req, res) {
    return res.json(questionList);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});