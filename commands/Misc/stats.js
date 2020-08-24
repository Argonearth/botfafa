module.exports.run = (client, message, args) => {
    message.channel.send(message.author.username + " qui a pour identifiant" + " " + message.author.id + " a posté un message");
};


module.exports.help = {
    name: 'stats',
    description: 'the stats',       
};