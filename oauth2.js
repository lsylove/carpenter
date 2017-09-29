"use strict";

const oauth2orize = require("oauth2orize");
const passport = require("passport");
const login = require("connect-ensure-login");
const db = require("./db");

const server = oauth2orize.createServer();

module.exports.authorization = [];

module.exports.decision = [];

module.exports.token = [];