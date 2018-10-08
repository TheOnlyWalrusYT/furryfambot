const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const streamOptions = {
  seek:0,
  volume:1
};
const SpotifyWebApi = require('spotify-web-api-node');
const spotifyApi = new SpotifyWebApi();
const http = require('http');


module.exports.run = async (bot, message, prefix) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let spotifyArg = args[0]
    let title = args[1]
    const voiceChannel = message.member.voiceChannel;
    const connection = await voiceChannel.join();

    if (spotifyArg == "spotify") {
        var request = require('request');

    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BQA-nQd8pO0fTihdbiCEx9iM0WgjGwGj1XtIh65lJPkYc1wF7M4Ggun7TTFnygl5iEJvQOfEwy4Y8eGp70DRXsFL5QZh69KRp47CatuphRJN9J8uW0QJXe9o-_1MfcxG8IqHjnJXniSJyPr5aWg'
    };

    var options = {
        url: 'https://api.spotify.com/v1/search?q=' + title + '&type=album%2Cartist%2Ctrack&limit=10',
        headers: headers
    };
    
    var url = args.slice(prefix.length + 4)

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body);
        }
    }
    const post = new Discord.RichEmbed()
        .setTitle("Search Results:")
        .setDescription(request(options, callback));

    }
  
    if(!message.member.voiceChannel) {
    
      voiceChannel.join();
    
    }
        

    if (message.content.includes('https://')) {
        url = message.content.slice(6)
    }

    if(!url) {
        message.channel.send('No URL provided!');
    }
  
    const stream = ytdl(url, { filter : 'audioonly' });
    const dispatcher = connection.playStream(stream, streamOptions);
    
    }

module.exports.help = {
    name: "play"
}

