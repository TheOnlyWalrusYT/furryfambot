const link = 'https://www.youtube.com/channel/UCXuduG-6l8Ad0TpM324sf8g'

module.exports.run = async (bot, message, args) => {

  message.channel.send(link)
  
}

module.exports.help = {

  name: "youtube"
  
}
