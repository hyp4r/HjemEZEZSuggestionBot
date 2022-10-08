// require('discord.js');
// const { Client, SlashCommandBuilder, Message } = require('discord.js');
// const hchannel = client.channels.cache.get("222086648706498562");

// module.exports = {
// 	data: new SlashCommandBuilder()
//         .setName('forslag')
//         .setDescription('Skriv et forslag')
//         .addStringOption(option =>
// 			option.setName('input')
// 				.setDescription('Selve forslaget')
// 				.setRequired(true)),
// 	async execute(interaction) {
// 		await hchannel.send('Hello!');
// 	},
// };

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
        .setName('echo')
        .setDescription('Replies with your input!')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true)),
    async execute(interaction) {
        const input = await interaction.options.getString('input');
        // await interaction.reply('Hello');
        const channel = await interaction.client.channels.cache.get('1028347318136733797').send(`${input}`);
        console.log(channel.id);
    },
};