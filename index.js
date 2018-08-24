const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login("process.env.TOKEN")
var prefix = ("*")

bot.on('ready', function() {
    bot.user.setPresence({ game: { name: 'destinylife', type: 2} })
    console.log("Connected");
});
bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");


    switch(args[0].toLowerCase()) {
        case "unknown":
        message.channel.send("", {
            embed: {
                color: 0xFF0000,
                author: message.author.name,
                title: '',
                fields: [{
                    name: "**__Lien d'invitation discord__**",
                    value: "[**Clique droit => Copier**](https://discord.gg/RJcxGct)",
                    inline: false
                }],
                footer: {
                    footer: "Partager ce lien a tous vos amis !",
                },
            }
        });
        break;
    }
});
