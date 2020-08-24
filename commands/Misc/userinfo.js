module.exports.run = (client, message, args) => {
    if (command === "userinfo") {
        const user_mention = msg.mentions.users.first();
        msg.channel.send(`Voici le tag de la personne mentionnée : ${user_mention.tag}.`);
    };
};

module.exports.help = {
    name : 'userinfo',
    description : 'Renvoie les infos d\'un utilisateur mentioné.',
};