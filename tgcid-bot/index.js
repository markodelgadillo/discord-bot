// Butt Stallion

// Logging in to Discord
const Discord = require('discord.js');
const { prefix, token, keyword } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
	if (message.content.includes(`${prefix}`)) {
		const command = message.content.match(/([!])\w+/)[0].substr(1);
		switch (command) {
		case 'destroy':
			message.channel.send('Whom shall I destroy, Master?');
			break;
		case 'help':
			message.channel.send('How may I help you?');
			break;
		}
	}
});

client.login(token);
