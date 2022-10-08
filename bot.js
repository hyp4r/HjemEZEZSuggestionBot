// Require the necessary discord.js classes
const { Client, GatewayIntentBits, InteractionResponse } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;


  switch(commandName) {
    case 'ping':
      await interaction.reply('Pong!');
      break;
    case 'server':
      await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nCreation Date: ${interaction.guild.createdAt}\nVerification level: ${interaction.guild.verificationLevel}`);
      break;
    case 'user':
      await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
      break;
    case 'hello':
      await interaction.reply('Hello!');
      break;
};
});

// Login to Discord with your client's token
client.login(token);
