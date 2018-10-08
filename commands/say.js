const Discord = require('discord.js');

module.exports.run = async (bot, message, args, admins, staff) => {
  let ma = message.author
  if(admins.includes(ma.id)) {
    let botmessage = args.join(" ");
    message.delete();
    message.channel.send(botmessage);
  } else if(message.member.roles.has(staff)) {
    let botmessage = args.join(" ");
    message.delete();
    message.channel.send(botmessage);
  } else {
  
    message.channel.send('You are not a staff member');
    
  }
}
module.exports.help = {
    name: "say"
}
