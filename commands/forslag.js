const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('forslag')
        .setDescription('Skriv et forslag')
        .addStringOption(option =>
			option.setName('input')
				.setDescription('Selve forslaget')
				.setRequired(true)),
	async execute(interaction) {
		await interaction.reply('Hello!');
	},
};
