// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var path = require("path");
var friendsList = require("../data/friends.js");
var questionList = require("../data/questions.js");

console.log("apiRoutes connected");

function apiRoutes(app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friendsList);
    });

    app.post("/api/friends"), function (req, res) {
        console.log("do something here");
    }

    // Route to the questions for the survey
    app.get("/api/questions", function (req, res) {
        return res.json(questionList.questions);
    });
}

module.exports = apiRoutes;