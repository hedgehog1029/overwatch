// The configuration file for Overwatch.

// ***** IRC SERVER CONFIGURATION *****                 //
// The bot will connect to a certain server and channel.//
// This is where you can set the server host and port.  //

exports.server = "irc.esper.net";
exports.port = "6667";

// ***** BOT CONFIGURATION ***** //
// Configure your bot here.      //

// Nick
exports.name = "Overwatch";

exports.user = "overwatchbot";
exports.realname = "overwatch, an IRC bot";
exports.channels = [ "#channel1", "#channel2" ];

// *** COMMANDS AND RESPONSES ***             //
// Commands are prefixed with ! internally.   //
// Only simple commands can be written here.  //
// For more complex commands, use commands.js.//

exports.commands = [{"command": "boo", "response": "BOO!"}];

// Mentions can be in any piece of text. //

exports.mentions = [{"keyword": "penguin", "response": "ALL HAIL THE OVERLORDS!"}];

// ***** MISC CONFIGURATION *****//

// Auto rejoin channels when kicked
exports.autoRejoin = false;

