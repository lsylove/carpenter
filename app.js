"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const errorHandler = require("errorhandler");
const session = require("express-session");
const passport = require("passport");
const oauth2 = require("./oauth2");

const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index.ejs");
})

app.get("/login", (req, res) => {
	res.render("login.ejs");
})

app.post("/login", (req, res) => {
	console.log("Got " + req.body.username);
})

app.listen(13355, () => {
	console.log("Listening on port 13355");
})