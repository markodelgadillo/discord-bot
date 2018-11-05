// Butt Stallion

// Logging in to Discord
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	console.log(message.content);
	if (message.content.includes(`${prefix}`)) {
		// find a new method of extracting the rest of the word from the word with the bang
		const command = message.substr(1);
		switch (command) {
		case 'destroy':
			message.channel.send('Whom shall I destroy, Master?');
			break;
		case 'help':
			message.channel.send('How may I help you?');
			break;
		}
	}
	else {
		message.content.forEach(word => {
			switch (word) {
			case '':
				break;
			}
		});
	}
});

client.login(token);
