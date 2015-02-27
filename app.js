var irc = require("irc"),
    colors = require("colors");

var logger = require("./lib/log.js"),
    irc = require("./lib/irc.js");
var config = require("./config/config.js");

//tests
logger.log(config.name);

var recps = [];
var mail = [];

irc.event.on("msg", function(from, to, msg) {
    if (recps.indexOf(from) != -1) {
        logger.log("user is in pending mail array");
        mail.some(function(value, index) {
            if (recps.indexOf(value["nick"]) != -1) {
                irc.client.say(value["nick"], "Message from " + value["sender"] + ": " + value["msg"]);
                recps.splice(recps.indexOf(value["nick"]), 1);
                mail.splice(index, 1);
            }
        });
    }

    if (msg.toLowerCase().indexOf("penguin") != -1) {
        irc.client.say(to, "ALL HAIL THE OVERLORDS");
    } else if (msg.indexOf("!") == 0) {
        if (msg.indexOf("tell") == 1) {
            var user = msg.substring(6, msg.indexOf(" ", 6));
            var message = msg.substring(msg.indexOf(" ", 6), msg.length);
            recps.push(user);
            mail.push({"nick": user, "sender": from, "msg": message});
            irc.client.say(to, "I'll pass that on when " + user + " is around.");
        }
    }
});
