var irc = require("irc"),
    EventEmitter = require("events").EventEmitter;

exports.event = new EventEmitter();

exports.client = new irc.Client(config.server, config.name, {
    channels: config.channels
});

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
