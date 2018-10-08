const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let lenny = '( ͡° ͜ʖ ͡°)'
  let superlenny = '( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)'
  let lennay = new Discord.RichEmbed()
  .setTitle(superlenny)
  .addField(`${lenny} ${lenny}`, `${lenny} ${lenny}`)
  .addField(`${lenny} ${lenny}`, `${lenny} ${lenny}`)
  
  message.channel.send(lennay)

}

module.exports.help = {

  name: "lenny"

}
