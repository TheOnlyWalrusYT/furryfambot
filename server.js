const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.TOKEN;
const config = require('./config.json');
const prefix = config.prefix;
const mprefix = config.mprefix;
const fs = require('fs');
const ms = require('ms');
const commands = {};
const musics = {};
const channels = require('./channels.json');
//const welcomeChannel = bot.channels.get('492432519682326543');
const welcomeChannel = bot.channels.get('495768879277277184');
const rulesChannel = channels.rulesChannel;
const rolesChannel = channels.rolesChannel;
const admins = ['272143165970972672', '335682119982514180', '405176071730888714', '195243136702873600', '290969756478078981', '453737275897937922', '444695380077051904', '246515638548430848'];
fs.readdirSync('./commands/').forEach(file => {
    commands[file.substring(0, file.length - 3)] = require('./commands/' + file);
});
fs.readdirSync('./music/').forEach(file => {
    musics[file.substring(0, file.length - 3)] = require('./music/' + file);
});

bot.on("guildMemberAdd", async member => {
  
    bot.channels.get('492432519682326543').send(`Hey **<@${member.id}>**, welcome to **Furry Fam**!\nPlease read **<#${rulesChannel}>**, then head over to **<#${rolesChannel}>** and choose your roles! https://image.ibb.co/hzwnP9/Welcome_To_The_Furry_Fam.png`)
    member.addRole(bot.roles.get('489101837564379136'))
  
});

bot.on("guildMemberRemove", async member => {
  
    bot.channels.get('492432519682326543').send(`Sorry to see you leave **${member}** :(`)
  
});

bot.on('message', async (message) => {
  
  if(message.author.bot) return;
  
  if(!message.guild) {
    let b = bot.channels.get('495768879277277184');
    b.send(message.author.tag+ " with id " + message.author.id + " said: \n" + message.content);
    return;
  }
  
  const staff = message.guild.roles.find(r => r.name == "STAFF");
  
  const args = message.content.slice(prefix.length).trim().split(" ");
  const command = args.shift().toLowerCase(); 
  
  if (message.content.startsWith(mprefix)) {
  
    const args = message.content.slice(mprefix.length).trim().split(" ");
    const music = args.shift().toLowerCase();
    if (musics[music] != null) {
        musics[music].run(bot, message, args)
    if(admins.includes(message.author.id)) {
    
      console.log(`Command ran: ${args}\nRan by: ${message.author.tag}\nRan in: <#${message.channel.id}>\nRan at: ${message.createdAt}`)
      
    }
  }
    
  } else {
  
    message.channel.send({embed:{
      title: 'Error',
      fields:
        [
          {
            name: 'That is not a valid music command'
          }
        ],
      color: 0xff000
    }}).then(msg => msg.delete(5000)).then(msg => message.delete(10));
    
  }
  
  if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(" ");
      const command = args.shift().toLowerCase();
      if (commands[command] != null) {
          commands[command].run(bot, message, args, admins, staff)
      if(admins.includes(message.author.id)) {
    
        console.log(`Command ran: ${args}\nRan by: ${message.author.tag}\nRan in: <#${message.channel.id}>\nRan at: ${message.createdAt}`)
      
      }
      }} else {
        message.channel.send({embed:{
        title:  'Error',
        fields:
            [
              {
                 name:'That is not a valid command'
              }
            ],
          color: 0xff0000
        }}).then(msg => msg.delete(5000)).then(msg => message.delete(10));
        
      }
  });

setTimeout(function() {

  bot.channels.get('495768879277277184').send('TEST 1 HOUR');

}, ms('1h'))

// bot.on('messageDelete', async (message) => {
  
//   if(message.author.bot) return;

//   bot.channels.get('495768879277277184').send(message.author.tag + ' deleted the messsage: ' + message.content)
  
// });

bot.on('ready', async (member) => {
    
    var statuses = ['with furries | ffhelp', 'with Finn | ffhelp', 'with walrus | ffhelp', 'with Alex | ffhelp'];
    var statusE = statuses[~~(statuses.length * Math.random())];
  
    var status = 'with furries | ffhelp';
  
    bot.user.setActivity(status)
  
  console.log('Bot is ready')
  
});

bot.login(token);

console.log('Bot is on');
