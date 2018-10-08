const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let link = 'https://cdn.discordapp.com/attachments/489942761383002114/498646656686882833/Wild_figlet_appears.jpg'

  let embed = new Discord.RichEmbed()
  .setImage(link)
  
  message.channel.send(embed)
  
}

module.exports.help = {

  name: "hello"
  
}
