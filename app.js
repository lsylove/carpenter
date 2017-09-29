"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const errorHandler = require("errorhandler");
const session = require("express-session");
const passport = require("passport");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index.ejs");
})

app.listen(13355, () => {
	console.log("Listening on port 13355");
})