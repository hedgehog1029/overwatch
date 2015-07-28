//var irc = require("irc"),
var EventEmitter = require("events").EventEmitter;

//var irclient = require("./client/client.js");
var slackclient = require("./client/slack-client.js");
var client = slackclient;

exports.event = client.event;
exports.client = client;

/* IRC CODE - We're on the Slack branch!

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

*/
