const { Client, Collection } = require('discord.js');
const { TOKEN , PREFIX } = require ('./config');
const { readdirSync } = require ("fs");

const client = new Client();
client.commands = new Collection();

const loadCommands = (dir = "./commands/") => {
    readdirSync(dir).forEach(dirs => {
        const commands = readdirSync(`${dir}/${dirs}/`).filter(files =>files.endsWith(".js"));

        for(const file of commands) {
            const getFileName = require(`${dir}/${dirs}/${file}`);
            client.commands.set(getFileName.help.name, getFileName);
            console.log(`Commande chargée: ${getFileName.help.name}`);
        };
    });
};

const loadEvents = (dir = "./events/") => {
    readdirSync(dir).forEach(dirs => {
        const events = readdirSync(`${dir}/${dirs}/`).filter(files =>files.endsWith(".js"));

        for(const event of events) {
            const Evt = require(`${dir}/${dirs}/${event}`);
            const EvtName = event.split(".")[0];

            client.on(EvtName, Evt.bind(null, client));
            console.log(`Evenement chargé: ${EvtName}`);
        };
    });
};

loadCommands();
loadEvents();

client.login(TOKEN);