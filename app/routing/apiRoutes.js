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

    app.post("/api/friends", function (req, res) {
        // var userStats = req.body;
        var userScores = req.body.scores;
        var diffArray = [];
        var match = 0;

        console.log(userScores);
        for (i = 0; i < friendsList.friends.length; i++) {
            var difference = 0;
            for (j = 0; j < friendsList.friends[i].scores.length; j++) {
                difference += Math.abs(friendsList.friends[i].scores[j] - userScores[j]);
            }
            console.log(difference);
            diffArray.push(difference);
        };
        console.log(diffArray);

        for (k = 1; k < diffArray.length; k++) {
            if (diffArray[k] < diffArray[match]) {
                match = k;
            }
        }
        console.log("Your match is: " + friendsList.friends[match].name);
    });

    // Route to the questions for the survey
    app.get("/api/questions", function (req, res) {
        return res.json(questionList.questions);
    });
}

// Export for main server file use
module.exports = apiRoutes;