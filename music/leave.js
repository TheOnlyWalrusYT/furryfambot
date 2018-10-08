const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    const voiceChannel = message.member.voiceChannel;
  
    voiceChannel.leave();
    
}
module.exports.help = {
    name: "leave"
}
