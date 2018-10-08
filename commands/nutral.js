const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let link = 'https://cdn.glitch.com/1e86a39e-d28e-4361-a47c-170f2c0142e7%2FIMG_2798.jpeg?1538758310297';
  let embed = new Discord.RichEmbed()
  .setImage(link)
  
  message.channel.send(embed)

}

module.exports.help = {

  name: "nutral"
  
}
