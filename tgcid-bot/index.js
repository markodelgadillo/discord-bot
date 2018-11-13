// Butt Stallion

// Logging in to Discord
const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.author.bot) return;
	const args = message.content
		.slice(1)
		.split(' ')
		.splice(0, 1);

	if (message.content.match(/([!])\w+/g)) {
		const command = message.content.match(/([!])\w+/g)[0].substr(1);
		switch (command) {
		case 'destroy':
			message.channel.send('Whom shall I destroy, Master?');
			break;
		case 'butthelp':
			message.channel.send(
				'How may the Butt Stallion, the horse to end all horses help you?'
			);
			break;
		case 'args-info':
			if (!args.length) {
				return message.channel.send(
					`You didn't provide any arguments, ${message.author}!`
				);
			}
			message.channel.send(`Command name: ${command}\nArguments: ${args}`);
			break;
		}
	}
	else {
		switch (message.content) {
		case 'fuck':
			message.channel.send(
				'There will be no sexual intercourse here on MY watch!'
			);
			break;
		case 'bitch':
			message.channel.send('Hey now! Let us all calm down here!');
			break;
		case 'shit':
			message.channel.send('You get that toilet talk outta here!');
			break;
		case 'ass':
			message.channel.send('Someone talking about butts!?');
			break;
		}
	}
});

client.login(token);
