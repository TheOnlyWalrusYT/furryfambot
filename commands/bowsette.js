const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let links = 'https://cdn.discordapp.com/attachments/494332752930537483/498531820481019905/bowsette4.jpg';
  let embed = new Discord.RichEmbed()
  .setImage(links)
  
  message.channel.send(embed)
  
}

module.exports.help = {

  name: "bowsette"
  
}
