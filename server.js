// Required files
var express = require("express");
var path = require("path");
var fs = require("fs");

// Set up Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



var friends = [
    {
        "name": "dog",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [5, 4, 2, 2, 3, 1, 4, 5, 2, 1]
    },
    {
        "name": "cat",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [5, 4, 2, 2, 3, 1, 4, 5, 2, 1]
    }
]

var questions = [
    { "question": "question1" },
    { "question": "question2" },
    { "question": "question3" }
]

// ROUTES
// Route to the homepage
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.get("/api/questions", function (req, res) {
    return res.json(questions);
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});