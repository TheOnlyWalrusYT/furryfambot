module.exports.run = async (bot, message, args, admins) => {
  
  if(!admins.includes(message.author.id)) {
  
    message.channel.send('Don\'t even try')
    
  } else {

  resetBot(message.channel)
  return;
  
  function resetBot(channel) {
  
    channel.send('Restarting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.TOKEN))
  
    }
  }
}

module.exports.help = {

  name: "restart"

}
