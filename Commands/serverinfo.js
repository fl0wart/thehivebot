const Discord = require('discord.js');
var invisible = '#36393e'


exports.run = async (bot, message, args) => {

    let sicon = message.guild.iconURL;
    if (sicon) {
        sicon = message.guild.iconURL
    } else {
        sicon = 'https://imgur.com/a/t7zw3BK';
    }
    var partenerfi = message.guild.verified;
    if(partenerfi){
        partenerfi = '<>';
    } else {
        partenerfi = '<>';
    }
    
    var Largesv = message.guild.memberCount;
    if(Largesv > 2000) {
        Largesv = '<>';
    } else {
        Largesv = '<>';
    }

    var Online = message.guild.members.filter(o => o.presence.status === 'online').size
    var Idle = message.guild.members.filter(i => i.presence.status === 'idle').size
    var Dnd = message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size
    var Invisible = message.guild.members.filter(off => off.presence.status === 'offline').size
    var textv = message.guild.channels.filter(channel => channel.type === 'text').size
    var voicev = message.guild.channels.filter(channel => channel.type === 'voice').size


    var serverinfoembed = new Discord.RichEmbed()
        .setAuthor(`Server Info`, message.guild.iconURL)
        .setThumbnail(sicon)
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setTimestamp()
        .addField('» Server Name', message.guild.name, true)
        .addField('» Server ID', '`' + message.guild.id + '`', true)
        .addField('» Owner', message.guild.owner.user.tag, true)
        .addField('» Location', REGION[message.guild.region], true)
        .addField('» Verification Level', `${message.guild.verificationLevel}`,true)
        .addField('» Total Members',`${message.guild.memberCount} (    ${Online + Idle + Dnd} online |   ${Invisible} offline )`,true)
        .addField('» Total Roles', `${message.guild.roles.size}`,true)
        .addField(`» Total Channels (${textv + voicev})`, `Text: ${textv} | Voice: ${voicev}`, true)
        .addField(`» Information`, `Partener ${partenerfi} | Large Server ${Largesv}`,true)
        .addField(`» Server Creation Date`, `${message.guild.createdAt.toLocaleDateString('en-US', {weekday: 'long',year: 'numeric',month: 'long',hour12: true,day: 'numeric'})}`, true)
        .addField(`» Your Join Date`, `${message.guild.joinedAt.toLocaleDateString('en-US', {weekday: 'long',year: 'numeric',month: 'long',hour12: true,day: 'numeric'})}`)
        .setColor('#f4a041');
    message.channel.send(serverinfoembed);

}


var REGION = {
    "us-east": `:flag_us: East USA`,
    "us-west": `:flag_us: West USA`,
    "us-south": `:flag_us: South USA`,
    "us-central": `:flag_us: Central USA`,
    "brazil": `:flag_br: Brazil`,
    "japan": `:flag_jp: Japan`,
    "russia": `:flag_ru: Russia`,
    "singapore": `:flag_sg: Singapore`,
    "southafrica": `:flag_za: South Africa`,
    "hongkong": `:flag_hk: Hong Kong`,
    "sydney": `:flag_au: Sydney`,
    "eu-west": `:flag_eu: Western Europe`,
    "eu-central": `:flag_eu: Central Europe`
};
