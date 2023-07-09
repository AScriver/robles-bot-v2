const path = require('node:path');
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const { initCommands, initEvents } = require('./utils');

const client = new Client({
	intents: [GatewayIntentBits.Guilds]
});

// Import commands and events
initCommands(client, path.join(__dirname, 'commands'));
initEvents(client, path.join(__dirname, 'events'));

// Log in to Discord with your client's token
client.login(token);