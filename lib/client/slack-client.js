var Slack = require("slack-client"),
	log = require("../log.js"),
	config = require("../../config/config.js"),
	EventEmitter = require("events").EventEmitter;

exports.event = new EventEmitter();

var slackClient = new Slack(config.slack_key, true, true);

slackClient.on("open", function() {
	log.log("Connected to Slack as " + slack.self.name);
});

slackClient.login();

slackClient.on("message", function(msg) {
	exports.event.emit("msg", msg.user, msg.channel, msg.text);
});

slackClient.on("userChange", function(user) {
    exports.event.emit("join", user);
});

exports.say = function(to, msg) {
	var channel = slackClient.getChannelGroupOrDMByID(to);

	channel.send(msg);
}