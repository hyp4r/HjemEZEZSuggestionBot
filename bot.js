const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'Hello',
    description: 'Replies with Hello!',
  },
];

const rest = new REST({ version: '10' }).setToken('9ad83a292cf747bcb6b47c12e42d5732754b794918376e5686981b144f0b9d87');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();