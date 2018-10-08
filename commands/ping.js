module.exports.run = async (bot, message, args) => {

  message.channel.send(`Ping is: ${Date.now() - message.createdAt}ms`)
  
}

module.exports.help = {

  name: "ping"

}
