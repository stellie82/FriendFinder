// Required files
var express = require("express");
var path = require("path");
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");

// Set up Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Server routing map 
apiRoutes(app);
htmlRoutes(app);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});