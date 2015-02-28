var irc = require("irc"),
    colors = require("colors");

// Init.
var logger = require("./lib/log.js"),
    irc = require("./lib/irc.js"),
    simple = require("./lib/simple-command.js");
var config = require("./config/config.js"),
    cmd = require("./config/commands.js");

// Console startup.
logger.log("overwatch started.");
logger.log("connected to server with nick " + config.name.green);
