const Discord = require('discord.js');
const got = require('got');
const api = '<hidden>';

module.exports.run = async (bot, message, args) => {

  let res = await got(`http://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent(args.join(" "))}`, {json: true})
  
  if(!res || !res.body || !res.body.data) {
  
    message.channel.send('No GIFs matched your search!')
    
  } else {
    
      let gifEmbed = new Discord.RichEmbed()
      .setTitle("Your requested GIF")
      .setAuthor(message.author.tag)
      .setImage(res.body.data.image_url)
    
      message.channel.send(gifEmbed)
  }
}

module.exports.help = {

  name: "gif"
  
}
