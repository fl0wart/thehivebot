const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply(":Accept:   | *You have successfully executed this permission.*");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply(":lock: | *Please mention a user.*");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply(":scroll: | *Specify a role.*");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply(":no: | *Couldn't find that role.*");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
  await(rMember.removeRole(gRole.id));
}

module.exports.help = {
  name: "removerole"
}
