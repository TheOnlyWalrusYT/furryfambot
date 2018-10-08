module.exports.run = async (bot, message, args, admins) => {
  
  if(!admins.contains(message.author.id)) {
  
    message.channel.send('Nope')
  
  } else {

  if(args != 'dnd' && args != 'idle' && args != 'online') {
   
    message.channel.send('That is not a valid status | Valid statuses are **idle**, **dnd**, and **online**')
    
  } else if(!args) {
    
    message.channel.send('No status specified')
    
  } else {

    bot.user.setStatus(toString(args))
  
  }
 }
}
module.exports.help = {

  name: "status"

}
