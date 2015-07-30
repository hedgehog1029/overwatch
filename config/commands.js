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

var http = require("https");
var wolfram = require("wolfram-alpha").createClient("G4AJQ5-XU4X2K77KV", { "format": "plaintext" });
var logger = require("../lib/log.js");

//       ** FUNCTIONS **        //
// This is where you register   //
// your commands and callbacks. //

c.register("tell", function(client, from, to, msg) {
    var user = client.client.getUserByName(msg.substring(6, msg.indexOf(" ", 6)));
    var message = msg.substring(msg.indexOf(" ", 6), msg.length);

    recps.push(user);
    mail.push({"user": user, "sender": from, "msg": message});
    client.say(to, "I'll pass that on when " + user.profile.first_name + " is around.");
});

c.registerAny(function(client, from, to, msg) {
    if (recps.indexOf(from) != -1) {
        mail.some(function(value, index) {
            if (recps.indexOf(value["user"]) != -1) {
                var dm = client.client.openDM(value["user"].id, function() {
                    this.send("Message from " + value["sender"].profile.first_name + ": " + value["msg"]);
                });

                recps.splice(recps.indexOf(value["user"]), 1);
                mail.splice(index, 1);
            }
        });
    }
});

c.register("g", function(client, from, to, msg) {
    var searchText = msg.substring(3, msg.length).replace(/\s+/g, "+");
    var url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyAruE7wV7LaL1tZ1XJRHCtA7pmuz9EfXl8&cx=006735756282586657842:s7i_4ej9amu&q=" + searchText;

    http.get(url, function(res) {
	if (res.statusCode == 200) {
		var data = '';
		
		res.on("data", function(chunk) {
			data += chunk;
		});

		res.on("end", function() {
			var j = JSON.parse(data);
			if (j["items"] != null) {
				client.say(to, from.profile.first_name + ": " + j["items"][0]["snippet"]);
				client.say(to, "From " + j["items"][0]["link"]);
			}
		});
	}
    });
});

c.register("compute", function(client, from, to, msg) {
    var searchText = msg.substring(9, msg.length);

    client.say(to, from.profile.first_name + ": computing...");
    wolfram.query(searchText, function(err, result) {
        if(err) throw err;
        if(result[1] == null) {
            client.say(to, from.profile.first_name + ": error computing, wolfram|alpha sucks sorry");
            return;
        }
        logger.log("result: %j" + result);
        client.say(to, from.profile.first_name + ": " + result[1]["subpods"][0]["text"]);
    });
});

c.registerM(" wuvs dudu", function(client, from, to, msg) {
	var person = msg.substring(0, msg.indexOf(" wuvs dudu", 0)).replace(/\s+/g, "-");
	client.say(to, "http://" + person + ".eduardo-dudu-surita.com");
});
