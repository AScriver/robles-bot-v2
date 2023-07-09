const { Events } = require('discord.js');

module.exports = {
	name: Events.Debug,
	once: false,
	execute: (message) => console.log(message)
};