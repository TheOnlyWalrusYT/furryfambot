module.exports.run = async (bot, message, args) => {

  message.channel.send(message.channel.id)

}

module.exports.help = {

  name: "channel"

}
