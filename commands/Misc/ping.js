module.exports.run = (client, message, args) => {
    message.channel.send('Pong mdr'); 
};


module.exports.help = {
    name: 'ping',
    description: 'says ping',
};