var irc = require("irc"),
    colors = require("colors");

var config = require("./config/config.js");

function log(msg) {
    console.log("overwatch > ".red + msg);
}

//tests
log(config.name);

var client = new irc.Client(config.server, config.bot.name, {
    channels: config.channels
});

