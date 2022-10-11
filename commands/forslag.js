const { EmbedBuilder, SlashCommandBuilder, Client, GatewayIntentBits } = require('discord.js');
var { Suggestion_nr } = require('../sg_num.json')
var user_choice;

const fs = require('fs');
const path = require('path');

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
					{ name: 'Map', value: 'map'},
					{ name: 'Discord', value: 'discord'},
					{ name: 'Event', value: 'event'},
				))
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Forslaget')
                .setRequired(true)),
    async execute(interaction) {
		if (interaction.options.getString('valg') === 'discord') {
            user_choice = 7506394;
        } else if (interaction.options.getString('valg') === 'map') {
			user_choice = 16767334; 
		} else if (interaction.options.getString('valg') === 'event') {
			user_choice = 10027008;
		}
        const input = await interaction.options.getString('input');
		const user = interaction.user.tag;
		const user_avatar = interaction.user.avatarURL();
		const exampleEmbed = new EmbedBuilder()
			.setColor(user_choice)
			.setAuthor({ name: user, iconURL: user_avatar })
			.addFields(
			{ name: `Suggestion #${Suggestion_nr}`, value: `${input}`, inline: false },
	)
		const channel = await interaction.client.channels.cache.get('1028347318136733797').send({ embeds: [exampleEmbed] });
		channel.react('⬆️');
		channel.react('⬇️');
		await interaction.reply({content: `Dit forslag er blevet indsendt`, ephemeral: true});
		Suggestion_nr = Suggestion_nr + 1;
		const Sg_nr = {
			"Suggestion_nr": Suggestion_nr
		}
		fs.writeFileSync(path.resolve(__dirname, '../sg_num.json'), JSON.stringify(Sg_nr));
    },
};