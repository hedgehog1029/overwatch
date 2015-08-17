// The configuration file for Overwatch.

// ***** IRC SERVER CONFIGURATION *****                 //
// The bot will connect to a certain server and channel.//
// This is where you can set the server host and port.  //

exports.server = "irc.esper.net";
exports.port = "6667";

// ***** SLACK CONFIGURATION *****//
// Add Slack bot key here. 		  //

exports.slack_key = "{slack-bot-key}";

// ***** BOT CONFIGURATION ***** //
// Configure your bot here.      //

// Nick
exports.name = "Overwatch";

exports.user = "overwatchbot";
exports.realname = "overwatch, an IRC bot";
exports.channels = [ "#kurisu", "#cookiepowered" ];

// *** COMMANDS AND RESPONSES ***             //
// Commands are prefixed with ! internally.   //
// Only simple commands can be written here.  //
// For more complex commands, use commands.js.//

exports.commands = [
    {"command": "boo", "response": "BOO!"},
    {"command": "magic", "response": "There will be no foolish wand-waving or silly incantations in this chatroom."},
    {"command": "caramel", "response": "Our lord and saviour; http://caramel.ga"},
    {"command": "help", "response": "Commands list: !boo, !magic, !caramel, !tell, !g, !compute"}
];

// Mentions can be in any piece of text. //

exports.mentions = [
    {"keyword": "penguin", "response": "ALL HAIL THE OVERLORDS!"},
    {"keyword": "meow", "response": "(=^･ω･^=)"}
];

// ***** MISC CONFIGURATION *****//

// Auto rejoin channels when kicked
exports.autoRejoin = false;

