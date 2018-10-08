const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let embed = new Discord.RichEmbed()
  .setTitle('Music Commands')
  .setDescription('Prefix is **ffm**')
  .addField('Help', 'Displays this')
  .setColor(0x00ff00)
  
  message.channel.send(embed)
  
}

module.exports.help = {

  name: "help"

}
