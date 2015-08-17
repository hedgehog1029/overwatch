# Overwatch
A Slack Bot made with <3 ..and Node.js

## Install

1. `git clone https://github.com/hedgehog1029/overwatch.git`
2. `npm install colors slack-client` (and `npm install wolfram-alpha` if you're leaving commands.js intact)
3. `nano config/config.js` (or your favorite editor) and edit the config file
4. `nano config/commands.js` (or your favorite editor) and edit the complex commands file
5. `node app.js` (or use a multiplexer)

## Coding commands

In commands.js, you can register complex commands. There are three functions:

* `c.register(command, function(client, to, from, msg))` - registers a command prefixed with a !
* `c.registerM(keyword, function(client, to, from, msg))` - registers a mention (triggers any time `keyword` is in a message)
* `c.registerAny(, function(client, to, from, msg))` - registers for any chat

The client object has two useful fields:

* `client.say(recipient, message)` - sends a message to `recipient` (can be a channel or DM object)
* `client.client` - the slack client object

The other callback arguments are:

* `to` - the channel or DM the message was sent to
* `from` - the user the message was sent by
* `msg` - the text of the message

You may use any APIs you like.
