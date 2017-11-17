"use_strict"
require("gimport").init(process.cwd());

console.log("Start TerraCerberus");

var util = require("util");
var path = require("path");
var Express = require("express");
var App = Express();

global.gimport("init")();

global.gimport("botserver");

// Start web application
global.gimport("uiserver")(App, Express);
App.listen("3000", () => {
    console.log(util.format("Start TerraCerberus at port %s!", "3000"));
});