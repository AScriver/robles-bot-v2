const fs = require('node:fs');
const path = require('node:path');

const initEvents = (client, eventsPath) => {
	const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

	for (const file of eventFiles) {
		const filePath = path.join(eventsPath, file);
		const event = require(filePath);
		const listener = (...args) => event.execute(...args);
		event.once ? client.once(event.name, listener) : client.on(event.name, listener);
	}
};

module.exports = initEvents;