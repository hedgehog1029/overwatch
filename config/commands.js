var c = require("../lib/complex-command.js");

// ***** COMPLEX COMMANDS ***** //
// Here, you may write complex  //
// commands by using a callback //
// to execute code when your    //
// command is executed.         //

//       ** VARIABLES **        //
// You may register variables   //
// for your own use here.       //

var recps = [];
var mail = [];

//       ** FUNCTIONS **        //
// This is where you register   //
// your commands and callbacks. //

c.register("tell", function(client, msg) {
    var user = msg.substring(6, msg.indexOf(" ", 6));
    var message = msg.substring(msg.indexOf(" ", 6), msg.length);

    recps.push(user);
    mail.push({"nick": user, "sender": from, "msg": message});
    client.say(to, "I'll pass that on when " + user + " is around.");
});

c.registerAny(function(client, msg) {
    if (recps.indexOf(from) != -1) {
        logger.log("user is in pending mail array");
        mail.some(function(value, index) {
            if (recps.indexOf(value["nick"]) != -1) {
                client.say(value["nick"], "Message from " + value["sender"] + ": " + value["msg"]);
                recps.splice(recps.indexOf(value["nick"]), 1);
                mail.splice(index, 1);
            }
        });
    }
});
