var c = require("../lib/complex-command.js");

// ***** COMPLEX COMMANDS ***** //
// Here, you may write complex  //
// commands by using a callback //
// to execute code when your    //
// command is executed.         //

// An example is shown here of  //
// a simple mail system.        //

//       ** VARIABLES **        //
// You may register variables   //
// for your own use here.       //

var recps = [];
var mail = [];

//       ** FUNCTIONS **        //
// This is where you register   //
// your commands and callbacks. //

c.register("tell", function(client, from, to, msg) {
    var user = msg.substring(6, msg.indexOf(" ", 6));
    var message = msg.substring(msg.indexOf(" ", 6), msg.length);

    recps.push(user);
    mail.push({"nick": user, "sender": from, "msg": message});
    client.say(to, "I'll pass that on when " + user + " is around.");
});

c.registerAny(function(client, from, to, msg) {
    if (recps.indexOf(from) != -1) {
        mail.some(function(value, index) {
            if (recps.indexOf(value["nick"]) != -1) {
                client.say(value["nick"], "Message from " + value["sender"] + ": " + value["msg"]);
                recps.splice(recps.indexOf(value["nick"]), 1);
                mail.splice(index, 1);
            }
        });
    }
});
