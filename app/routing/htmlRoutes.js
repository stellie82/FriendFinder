var path = require("path");

// Create a function to setup HTML routes
function htmlRoutes(app) {
    // Route to the homepage
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // Route to the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}

// Export for main server file use
module.exports = htmlRoutes;