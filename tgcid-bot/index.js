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
		case 'butthelp':
			message.channel.send(
				'How may the Butt Stallion, the horse to end all horses help you?'
			);
			break;
		}
	}
	// only detecting the first word of the array
	else if (message.content.includes(...keyword.vulgar)) {
		console.log('It is vulgar!');
		const word = keyword.vulgar.filter(vulgarity =>
			message.content.inlcudes(vulgarity)
		);
		console.log(word + ' here is the current word');
		switch (word[0]) {
		case 'fuck you':
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
