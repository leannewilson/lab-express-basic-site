// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static("public"));

// home route
app.get("/home", (request, response, next) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

// about route
app.get("/about", (request, response, next) => {
  response.sendFile(__dirname + "/views/about-page.html");
});

// works route
app.get("/work", (request, response, next) => {
  response.sendFile(__dirname + "/views/works-page.html");
});

// Server Started
app.listen(3000, () => console.log("Guess who"));
