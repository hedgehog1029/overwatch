var irc = require("irc"),
    colors = require("colors");

var config = require("./config/config.js");

function log(msg) {
    console.log("overwatch > ".red + msg);
}

//tests
log(config.bot.name);

var client = new irc.Client(config.server, config.bot.name, {
    channels: config.bot.channels
});

