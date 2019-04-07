const Discord = require('discord.js');

exports.run = async (bot, message, args) => {

    var arg = message.content.split(" ").slice(1);
    if(!arg[0]) {
        return message.channel.send('Please specify a role name from this guild.')
    }
    let user = message.mentions.users.first() || message.author;

    let role = message.guild.roles.find(r => r.name === `${arg[0]}`) || message.guild.roles.find(r => r.mentionable);
    if(!message.guild.roles.find(r => r.name === arg[0]))
    {
        return message.channel.send('Please specify a valid role.')
    }
    
    
    roleperm = role.hasPermission('ADMINISTRATOR');
    if(roleperm){
        roleperm = '✅ Yes';
    } else {
        roleperm = '❌ No';
    }

    rolec = role.color;
    if(!rolec) {
        rolec = 'None';
    } else {
        rolec = `${role.hexColor.toUpperCase()}`;
    }
    roleembed = role.color;
    if(!roleembed) {
        roleembed = `#b3ffb3`;
    } else {
        roleembed = `${role.hexColor}`;
    }
    let sicon = message.guild.iconURL;
    if (sicon) {
        sicon = message.guild.iconURL
    } else {
        sicon = 'https://png.icons8.com/ios/1600/discord-logo.png';
    }
    let rmention = role.mentionable;
    if(rmention) {
        rmention = 'Yes';
    } else {
        rmention = 'No';
    }

    const eembed = new Discord.RichEmbed()
        .setAuthor("Role Info", `https://discordemoji.com/assets/emoji/owner.png`)
        .addField("» Role Name", `**${role.name.toUpperCase()}**`, true)
        .addField("» Role Color", rolec ,true)
        .addField("» Role Id", '`' + role.id + '`',true)
        .addField("» Required Text", '`' + `<@&${role.id}>` + '`',true)
        .addField('» Role Created At', `${role.createdAt.toLocaleDateString('en-US', {weekday: 'long',year: 'numeric',month: 'long',hour12: true,day: 'numeric'})}`,true)
        .addField("» Mentionable", rmention ,true)
        .addField("» Administrator", roleperm ,true)
        .addField("» Position", `**${role.position}** of **${message.guild.roles.size}**`, true)
        .setFooter(`» ${role.name}'s information`)
        .setColor(roleembed)
        .setThumbnail(sicon)
    message.channel.send(eembed)
}

var monthsofyear = {
    "1": 'January',
    "2": 'February',
    "3": 'March',
    "4": 'April',
    "5": 'May',
    "6": 'June',
    "7": 'July',
    "8": 'August',
    "9": 'September',
    "10": 'October',
    "11": 'November',
    "12": 'December'  
};
