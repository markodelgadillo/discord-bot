// Butt Stallion

// Logging in to Discord
const Discord = require('discord.js');
const { token } = require('./config.json');
const client = new Discord.Client();
// const { embed } = require('./embed.js');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	// returning a combination of responses
	if (message.author.bot) return;
	console.log('this is the message: ' + message.content);

	const args = message.content.split(' ').slice(1);
	console.log(typeof args);

	if (message.content.match(/([!])\w+/g)) {
		const command = message.content.match(/([!])\w+/g)[0].substr(1);
		console.log('Command: ' + command);
		switch (command) {
		case 'destroy': {
			message.channel.send('Whom shall I destroy, Master?');
			break;
		}
		case 'butthelp': {
			message.channel.send(
				'How may the Butt Stallion, the horse to end all horses help you?'
			);
			break;
		}
		case 'argsInfo': {
			if (!args.length) {
				return message.channel.send(
					`You didn't provide any arguments, ${message.author}!`
				);
			}
			else if (args[0] === 'foo') {
				return message.channel.send('bar');
			}
			message.channel.send(`First argument: ${args[0]}`);
			break;
		}
		case 'kick': {
			const taggedUser = message.mentions.users.first();
			if (!message.mentions.users.size) {
				return message.reply(
					'You need to tag a user you wish to exile from the land of TGCID!'
				);
			}
			else if (message.author === taggedUser) {
				return message.reply(
					'Why do you hate yourself? Butt Stallion loves you!'
				);
			}
			else if (taggedUser.toString() === '<@508202122857283596>') {
				const embed = {
					description:
							'I found your picture on the internets! [Check it out here! ](https://i.pinimg.com/originals/af/00/da/af00da5c5a181859194132134b76a7e4.jpg)',
				};
				return message.reply({ embed });
			}
			else {
				return message.channel.send(
					`You wanted to kick: ${taggedUser.username}`
				);
			}
		}
		}
	}
	else {
		switch (message.content.toLowerCase()) {
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
		case 'shut up butt stallion':
			message.reply('Don\'t make me puke out rainbows right into your hole!');
			break;
		}
		return;
	}
});

client.login(token);
