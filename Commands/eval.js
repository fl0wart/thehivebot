const Discord = require('discord.js');
const util = require('util');
const TOKEN = process.env.TOKEN;

exports.run = async (bot, message , args) => {
if (message.author.id != '523818319023833101') return message.channel.send('❌ This command is only for **Developers**.');
let code = args.join(' ');            
try {
        let ev = eval(code)
                        let str = util.inspect(ev, {
                            depth: 1
                        })
                        str = `${str.replace(new RegExp(`${TOKEN}|${process.env.TOKEN}`, "g"), "yungdrew was here")}`;
                        if(str.length > 1800) {
                            str = str.substr(0, 1800)
                            str = str + "..."
                        }
            message.channel.send("", { embed: { 
            color: 2551400,      
        fields: [{        
            name: '**:inbox_tray: Input**',     
            value: '\`\`\`' + code + '\`\`\`'         
        },{     
            name: '**:outbox_tray: Output**', 
                value: '\`\`\`' + str + '\`\`\`'  
                }], 
            footer: {     
            text: ``    }     
        }});
    } catch (err) {   

        message.channel.send("", { embed: { 
            color: 2551400,      
        fields: [{        
            name: '**:inbox_tray: Input**',     
            value: '\`\`\`' + code + '\`\`\`'         
        },{     
            name: '**:outbox_tray: Output**', 
                value: '\`\`\`' + err + '\`\`\`'  
                }], 
            footer: {     
            text: ``    }     }});    } 
        }; 
