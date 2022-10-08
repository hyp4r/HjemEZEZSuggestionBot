const { EmbedBuilder, SlashCommandBuilder, Client, GatewayIntentBits } = require('discord.js');
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
            option.setName('input')
                .setDescription('Forslaget')
                .setRequired(true)),
    async execute(interaction) {
		message.interaction.client.channels.cache.get.send("https://cdn.discordapp.com/avatars/"+message.author.id+"/"+message.author.avatar+".jpeg");
        const input = await interaction.options.getString('input');
		const exampleEmbed = new EmbedBuilder()
			.setColor(0x0099FF)
			.setAuthor()
			.setImage(avatarURL)
			.setTitle('')
			.addFields(
			{ name: '', value: 'Some value here' },
			{ name: '\u200B', value: '\u200B' },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
			{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
		await interaction.client.channels.cache.get('1028347318136733797').send({ embeds: [exampleEmbed] });
    },
};