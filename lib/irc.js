var irc = require("irc"),
    EventEmitter = require("events").EventEmitter;

var config = require("../config/config.js");

exports.event = new EventEmitter();

var client = new irc.Client(config.server, config.name, {
    channels: config.channels
});

exports.client = client;

client.addListener("message", function(from, to, msg) {
    exports.event.emit("msg", from, to, msg);
});

client.addListener("pm", function(from, msg) {
    exports.event.emit("pm", from, msg);
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
