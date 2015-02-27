var irc = require("irc"),
    colors = require("colors");

var logger = require("./lib/log.js"),
    irc = require("./lib/irc.js");
var config = require("./config/config.js");

//tests
logger.log(config.name);

var visitors = [];
var mail = [];

irc.event.on("msg", function(from, to, msg) {
    if (msg.toLowerCase().indexOf("penguin") != -1) {
        irc.client.say(to, "ALL HAIL THE OVERLORDS");
    } else if (msg.indexOf("!") == 0) {
        if (msg.indexOf("mail") == 1) {
            var user = msg.substring(5, msg.indexOf(" ", 5));
            var message = msg.substring(msg.indexOf(" ", 5), msg.length);
            if(visitors.indexOf(user) != -1) {
                mail.push({"nick": user, "sender": from, "msg": message});
            }
        }
    }
});

irc.event.on("join", function(channel, nick) {
    if (visitors.indexOf(nick) == -1) {
        visitors.push(nick);
    }
    mail.every(function(value, index) {
        if (value["nick"] == nick) {
            irc.client.say(nick, "Mail from " + value["sender"] + ": " + value["msg"]);
            mail.splice(index, 1);
        }
    });
});
