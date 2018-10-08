const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  const voiceChannel = message.member.voiceChannel;
  const connection = await voiceChannel.join();
  
  connection.dispatcher.end()
  
}
module.exports.help = {
    name: "stop"
}
