// Your htmlRoutes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

var path = require("path");

console.log("htmlRoutes connected");

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