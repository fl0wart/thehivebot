const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {  

  message.channel.send(new Discord.RichEmbed()
        .setDescription(`[🔷] **Available Commands!**\n\n\Moderation Commands! (🔩)\n\n\`ban\` , \`kick\` , \`purge\`, \`addrole\`, \`removerole\`, \`mute\`  \n\nDefault Commands! (💻)\n\n\`roleinfo\`, \`8ball\`,  \`avatar\` , \`serverinfo\`\n\n\Developer Commands! (⭐)\n\n\`eval\`, \`reboot\, \`say\```)
        .setColor('#25c059')
    );
}
