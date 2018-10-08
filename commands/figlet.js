const D = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let link = 'https://cdn.discordapp.com/attachments/489942761383002114/497110613705883668/FIGLET.png';
  let embed = new D.RichEmbed()
  .setImage(link)
  
  message.channel.send(embed)

}

module.exports.help = {

  name: "figlet"

}
