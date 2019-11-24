var path = require("path");

// Required files for data
var friendsList = require("../data/friends.js");
var questionList = require("../data/questions.js");

// Create a function to setup API routes
function apiRoutes(app) {
    // Route to the possible list of companions
    app.get("/api/friends", function (req, res) {
        return res.json(friendsList);
    });

    // Route to post results of user data and matched companion
    app.post("/api/friends", function (req, res) {
        // var userStats = req.body;
        var userScores = req.body.scores;
        var diffArray = [];
        var match = 0;
        
        // Create a loop to find the difference in scores between user and companion list
        for (i = 0; i < friendsList.friends.length; i++) {
            var difference = 0;
            for (j = 0; j < friendsList.friends[i].scores.length; j++) {
                difference += Math.abs(friendsList.friends[i].scores[j] - userScores[j]);
            }
            diffArray.push(difference);
        };

        for (k = 1; k < diffArray.length; k++) {
            if (diffArray[k] < diffArray[match]) {
                match = k;
            }
        }

        // Send results
        res.send(friendsList.friends[match]);
        console.log("Your match is: " + friendsList.friends[match].name);
    });

    // Route to the questions for the survey
    app.get("/api/questions", function (req, res) {
        return res.json(questionList.questions);
    });
}

// Export for main server file use
module.exports = apiRoutes;