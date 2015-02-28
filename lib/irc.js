var irc = require("irc"),
    EventEmitter = require("events").EventEmitter;

var irclient = require("./client/client.js");
var client = irclient.client;

exports.event = new EventEmitter();
exports.client = client;

client.addListener("message", function(from, to, msg) {
    exports.event.emit("msg", from, to, msg);
});

client.addListener("pm", function(from, msg) {
    exports.event.emit("pm", from, msg);
});

client.addListener("join", function(channel, nick) {
    exports.event.emit("join", channel, nick);
});

exports.join = function(channel, pass) {
    if (pass) {
        client.join(channel + " " + pass);
    } else {
        client.join(channel);
    }
}

exports.part = function(channel) {
    client.part(channel);
}
