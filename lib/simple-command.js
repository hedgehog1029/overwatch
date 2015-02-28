var irc = require("./irc.js"),
    logger = require("./log.js");

var config = require("../config/config.js");

irc.event.on("msg", function(from, to, msg) {
    var m = config.mentions;
    var c = config.commands;

    if (msg.indexOf("!") == -1) {
        for (var key in m) {
            logger.log("keyword: " + key + ", msg: " + msg);
            if (msg.toLowerCase().indexOf(key["keyword"].toLowerCase()) != -1) {
                irc.client.say(to, key["response"]);
            }
        }
    } else if (msg.indexOf("!") == 0) {
        for (var key in c) {
            if (msg.toLowerCase().indexOf(key["command"].toLowerCase()) == 1) {
                irc.client.say(to, key["response"]);
                break;
            }
        }
    }
});
