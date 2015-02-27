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
    if (from == user) {
        logger.log("from == user returned true");
        mail.some(function(value) {
            logger.log("nick: " + value["nick"] + ", sender: " + value["sender"] + ", msg: " + value["msg"]);
            if (value["nick"] == user) {
                irc.client.say(user, "Message from " + value["sender"] + ": " + value["msg"]);
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
            irc.client.say(from, "I'll pass that on when " + user + " is around.");
        }
    }
});
