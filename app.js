//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");
const https = require("https");
require('dotenv').config();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


const apiUrl = "https://api.nasa.gov/planetary/apod?api_key="+process.env.API_KEY


//When the user lands on the site we will send this page
app.get("/", function(req, res) {

res.render("home", {URL: apiUrl });

});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
