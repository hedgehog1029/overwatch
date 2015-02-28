var irc = require("irc"),
    config = require("../../config/config.js");

var client = new irc.Client(config.server, config.name, {
    channels: config.channels,
    userName: config.user,
    realName: config.realname,
    autoRejoin: config.autoRejoin
});

exports.client = client;
