const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
  
  let oof = 'https://cdn.discordapp.com/attachments/494169387096342548/494170565742034944/image0.jpg'
  
  let embed = new Discord.RichEmbed()
  .setTitle('**O**oF')
  .setImage(oof)
  .setColor(0xffff00)
  
  message.channel.send(embed)
  
}

module.exports.help = {

  name: "oof"
  
}
