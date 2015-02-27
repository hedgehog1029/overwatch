var irc = require("irc"),
    colors = require("colors");

var logger = require("./lib/log.js"),
    irc = require("./lib/irc.js");
var config = require("./config/config.js");

//tests
logger.log(config.name);

irc.event.on("msg", function(from, to, msg) {
    if (msg.indexOf("penguin") != -1) {
        client.say(from, "ALL HAIL THE OVERLORDS");
    }
});
