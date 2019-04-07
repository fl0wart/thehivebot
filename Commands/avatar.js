const Discord = require('discord.js');


exports.run = async (bot, message, args) => {
    let uUser = message.mentions.users.first() || message.author;
    let hexcolor = message.guild.members.get(uUser.id).highestRole.color

    if(!message.guild.members.get(uUser.id).highestRole.color) {
        hexcolor = '#ededed'
    }

    var avatarembed = new Discord.RichEmbed()
        .setAuthor(`${uUser.username}'s avatar`, uUser.avatarURL)
        .setDescription(`**[${uUser.username}'s avatar link](${uUser.avatarURL})**`)
        .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
        .setColor(hexcolor)
        .setImage(uUser.avatarURL);
    message.channel.send(avatarembed);
}
