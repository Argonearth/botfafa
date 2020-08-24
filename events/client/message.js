const { Client, Collection } = require('discord.js');
const { TOKEN , PREFIX } = require ('../../config');


module.exports = (client, message) => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const commandName = args.shift().toLowerCase();


    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    command.run(client, message, args);
};