// Your apiRoutes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var path = require("path");

// Required files for data
var friendsList = require("../data/friends.js");
var questionList = require("../data/questions.js");

console.log("API routes connected");

function apiRoutes(app) {
    // Route to the possible list friends
    app.get("/api/friends", function (req, res) {
        return res.json(friendsList);
    });

    app.post("/api/friends", function(req, res) {
        // console.log(req.body);
        res.send(req.body);
    });
    // Route to the questions for the survey
    app.get("/api/questions", function (req, res) {
        return res.json(questionList.questions);
    });
}

// Export for main server file use
module.exports = apiRoutes;