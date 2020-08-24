module.exports = (client, messageReaction, user) => {
    const message = messageReaction.message;
    const member = message.guild.members.cache.get(user.id);
    const emoji = messageReaction.emoji.name;
    const channel = message.guild.channels.cache.find(c => c.id === '741718535650410528');
    const pcRole = message.guild.roles.cache.get("743366014368219161");
    const portableRole = message.guild.roles.cache.get("743366180063936525");
    const tabletteRole = message.guild.roles.cache.get("743366614967386192");

    if (member.user.bot) return;
    if(["💻", "📱", "📲"].includes(emoji) && message.channel.id === channel.id) {
        switch (emoji) {
            case "💻" :
                member.roles.remove(pcRole);
                message.channel.send(`Le rôle ${pcRole.name} a été supprimé.`);
            break;    

            case "📱" :
                member.roles.remove(portableRole);
                message.channel.send(`Le rôle ${portableRole.name} a été supprimé.`);
            break;

            case "📲" :
                member.roles.remove(tabletteRole);
                message.channel.send(`Le rôle ${tabletteRole.name} a été supprimé.`);
            break;
        };
    };

};