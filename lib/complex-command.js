var irc = require("./irc.js");

var c = [];
var m = [];
var a = [];

exports.register = function(command, callback) {
    c.push({"command": command, "callback": callback});
}

exports.registerM = function(keyword, callback) {
    m.push({"keyword": keyword, "callback": callback});
}

exports.registerAny = function(callback) {
    a.push({"callback": callback});
}

irc.event.on("msg", function(from, to, msg) {

    for (var any in a) {
        any["callback"](irc.client, msg);
    }

    if (msg.indexOf("!") == 0) {
        for (var key in c) {
            if (msg.toLowerCase().indexOf(key["command"].toLowerCase()) == 1) {
                key["callback"](irc.client, msg);
                break;
            }
        }
    } else {
        for (var key in m) {
            if (msg.toLowerCase().indexOf(key["keyword"].toLowerCase()) != -1) {
                key["callback"](irc.client, msg);
            }
        }
    }
});
