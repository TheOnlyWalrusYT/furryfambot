module.exports.run = async (bot, message, args) => {

  let status = args.join(" ")
  bot.user.setActivity(status)
  
  message.channel.send('Set activity to: ' + status)

}

module.exports.help = {

  name: "status"
  
}
