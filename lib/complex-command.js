var irc = require("./irc.js");

var c = [];

exports.register = function(command, callback) {
    c.push({"command": command, "callback": callback});
}

irc.event.on("msg", function(from, to, msg) {
    if (msg.indexOf("!") == 0) {
        for (var key in c) {
            if (msg.toLowerCase().indexOf(key["command"].toLowerCase()) == 1) {
                key["callback"](irc.client, msg);
                break;
            }
        }
    }
});
