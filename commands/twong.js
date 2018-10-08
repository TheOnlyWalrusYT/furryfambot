const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let wong = 'https://media.discordapp.net/attachments/489940358327959553/497780684941688844/PSX_20181005_103924.jpg?width=439&height=510'

  let wongEmbed = new Discord.RichEmbed()
  .setImage(wong)
  .setFooter('Created by: Luke')
  
  message.channel.send(wongEmbed)
  
}

module.exports.help = {

  name: "twong"

}
