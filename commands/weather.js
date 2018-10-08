const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = async (bot, message, args) => {
   
  weather.find({search: args.join(" "), degreeType:'F'}, function(err, result) {
    if(err) console.log(err)
    
    if(result.length === 0) {
      message.channel.send('Invalid location')
      return;
    }
    
    var current = result[0].current;
    var location = result[0].location;
    var alerts = current.alert;
    if(!alerts) {
    
      alerts = 'No active alerts'
      
    }
    
    let weatherEmbed = new Discord.RichEmbed()
    .setTitle(`Weather for ${current.observationpoint}`)
    .setThumbnail(current.imageUrl)
    .setColor(0x00ff00)
    .addField('Time Zone', `UTC${location.timezone}`, true)
    .addField('Degree Type', location.degreetype, true)
    .addField('Temperature', `${current.temperature} Degrees`, true)
    .addField('Feels Like', `${current.feelslike}`, true)
    .addField('Wind', `${current.winddisplay}`, true)
    .addField('Humidity', `${current.humidity}%`, true)
    .addField('Active Alerts: ', alerts)
    
    message.channel.send(weatherEmbed);
  });
}
module.exports.help = {
  name: "weather"
}
