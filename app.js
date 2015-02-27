var irc = require("irc"),
    colors = require("colors");

var logger = require("./lib/log.js"),
    irc = require("./lib/irc.js");
var config = require("./config/config.js");

//tests
logger.log(config.name);

var mailPending = {};

irc.event.on("msg", function(from, to, msg) {
    if (msg.toLowerCase().indexOf("penguin") != -1) {
        irc.client.say(to, "ALL HAIL THE OVERLORDS");
    } else if (msg.indexOf("!") == 1) {
        if (msg.indexOf("tell") != -1) {

        }
    }
});

irc.event.on("join", function(channel, nick) {
    if (mailPending.indexOf(nick) != -1) {

    }
});
