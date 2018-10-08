const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
  
    message.channel.send("Fuck you. Stop trying")
    
  } else {

  let dm = args.slice(1).join(" ")
  
  let uDm = message.mentions.members.first()
  
  let dmEmbed = new Discord.RichEmbed()
  .setDescription(dm)
  .setColor('RANDOM');
  
  message.delete().catch();
  
  uDm.send(dmEmbed);
  }
}
module.exports.help = {

  name: "dm"
  
}

