const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) return message.channel.send(":x:  **| Sorry, you don't have permissions to use this!**");
  
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member) return message.channel.send(":x:  **| Please mention a valid member!**");
  
  let role = message.mentions.roles.first() || message.guild.roles.get(args[1]) || message.guild.roles.find(r => r.name === `${args[1]}`);
  if(!role) return message.channel.send(":x:  **| Please mention a valid role!**");

  await member.addRole(role)
  message.channel.send(`:white_check_mark: | ${member.user.username} has received the \`${role.name}\` role!`)
    .catch(error => message.channel.send(`Error: ${error}`).then(m => m.delete(10000)));

    let log = bot.channels.get('560524589248151553');
    log.send(new Discord.RichEmbed()
        .setTitle(`Role Added`)
        .addField('User', `${member.user.tag}`)
        .addField('Admin', `${message.author.tag}`)
        .addField('Role', `${role}`)
        .setColor('#25c059'))
}
