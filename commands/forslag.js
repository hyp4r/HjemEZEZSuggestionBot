const { EmbedBuilder, SlashCommandBuilder, Client, GatewayIntentBits, messageLink } = require('discord.js');
var { Suggestion_nr } = require('../sg_num.json')

const fs = require('fs');
const path = require('path');

console.log(Suggestion_nr);
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});


module.exports = {
    data: new SlashCommandBuilder()
        .setName('forslag')
        .setDescription('Skriv et forslag')
		.addStringOption(option =>
			option.setName('valg')
				.setDescription('Vælg et forslag')
				.setRequired(true)
				.addChoices(
					{ name: 'Map', value: 'Lav et forslag til maps'},
					{ name: 'Discord', value: 'Lav et forslag til Discorden'},
					{ name: 'Event', value: 'Lav et forslag til events'},
				))
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Forslaget')
                .setRequired(true)),
    async execute(interaction) {
        const input = await interaction.options.getString('input');
		const exampleEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setTitle('he')
			.addFields(
			{ name: `Suggestion #${Suggestion_nr}`, value: `${input}`, inline: false },
	)
		const channel = await interaction.client.channels.cache.get('1028347318136733797').send({ embeds: [exampleEmbed] });
		await interaction.reply('Dit forslag er blevet indsendt');
		Suggestion_nr = Suggestion_nr + 1;
		console.log(Suggestion_nr);
		const Sg_nr = {
			"Suggestion_nr": Suggestion_nr
		}
		 
		fs.writeFileSync(path.resolve(__dirname, 'sg_num.json'), JSON.stringify(Sg_nr));
    },
};