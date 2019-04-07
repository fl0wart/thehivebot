const Discord = require('discord.js');

exports.run = async (bot, message , args) => {
if (message.author.id != '523818319023833101') return message.channel.send('❌ This command is only for **Developers**.');
    var arg = message.content.split(" ").slice(1);
    message.channel.send(`${arg.join(' ')}`);
}
