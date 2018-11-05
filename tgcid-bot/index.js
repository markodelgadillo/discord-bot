// Butt Stallion

// Logging in to Discord
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
	if (message.content === '!destroy') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Whom shall I destroy, Master?');
	}
});

client.login('NTA4MjAyMTIyODU3MjgzNTk2.DsEgrw.aW4kHYz48ALTzukRreUDatg3JA0');
