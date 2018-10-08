const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

  let user = message.mentions.users.first() || message.author || args(22);
  let created = user.createdAt;
  let name = user.username;
  let pfp = user.avatarUrl;
  let botUser = user.bot;
  
  if(botUser == false) {
    let userEmbed = new Discord.RichEmbed()
    .setTitle(name)
    .setDescription(`User created at: ` + created)
    .addField('Username: ', user.username)
    .addField('Discriminator: ', user.discriminator)
    .setThumbnail(user.displayAvatarURL)
    .addField('Bot: ', 'Not a bot!')
    .setColor(0x00ff00)
    .setFooter('ID: ' + user.id)
    message.channel.send(userEmbed)
  } else {
  
    let userEmbed = new Discord.RichEmbed()
    .setTitle(name)
    .setDescription(`User created at: ` + created)
    .addField('Username: ', user.username)
    .addField('Discriminator: ', user.discriminator)
    .setThumbnail(user.displayAvatarURL)
    .addField('Bot: ', 'Is a bot!')
    .setColor(0x00ff00)
    .setFooter('ID: ' + user.id)
    message.channel.send(userEmbed)
    
  }
  
  
}

module.exports.help = {

  name: "user"
  
}
