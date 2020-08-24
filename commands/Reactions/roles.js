const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
    const pcRole = message.guild.roles.cache.get("743366014368219161");
    const portableRole = message.guild.roles.cache.get("743366180063936525");
    const tabletteRole = message.guild.roles.cache.get("743366614967386192");

    const embed = new MessageEmbed()
        .setTitle("Les Rôles")
        .setDescription("Cliquez sur les réactions pour obtenir le rôle souhaité.")
        .setColor("#dc143c")
        .addField(
            "Les rôles :",
            `
            "💻" - ${pcRole.toString()}
            "📱" - ${portableRole.toString()}
            "📲" - ${tabletteRole.toString()}
            `
        );
        message.channel.send(embed).then(async msg => {
            await msg.react('💻');
            await msg.react('📱');
            await msg.react('📲');
        });
};


module.exports.help = {
    name: 'roles',
    aliases: ['roles'],
    category: 'reactions',
    description: 'Renvoie un message avec des réactions',
};