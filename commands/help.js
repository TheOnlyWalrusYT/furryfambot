const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
  if(message.content.includes('staff')) {
  
    let staffembed = new Discord.RichEmbed()
    .setTitle('Staff Commands')
    .setDescription('Prefix is **ff**')
    .setColor(0x00ff00)
    .addField('Ev', 'Evaluates the given code | Bot handlers only')
    .addField('Say', 'Says the given text')
    
    message.channel.send(staffembed)
    
  } else {
  
    let embed = new Discord.RichEmbed()
    .setTitle('Commands')
    .setDescription('Prefix is **ff**')
    .setColor(0x00ff00)
    .addField('Figlet', 'FIGLET')
    .addField('Gak', '~gak')
    .addField('Hello', 'A WILD FIGLET APPEARS')
    .addField('Help', 'Displays this')
    .addField('Lenny', '( ͡° ͜ʖ ͡°)')
    .addField('Oof', '**O**oF')
    .addField('Ree', '***Reee***')
    .addField('TWong', 'It\'s just art...')
  
    message.channel.send(embed)
  }
}

module.exports.help = {

  name: "help"
  
}
