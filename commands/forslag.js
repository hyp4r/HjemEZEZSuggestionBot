const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('forslag')
        .setDescription('Skriv et forslag')
        .addStringOption(),
	async execute(interaction) {
		await interaction.reply('Hello!');
	},
};
