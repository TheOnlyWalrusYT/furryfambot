const Discord = require('discord.js');
const heart = 'less than three';
const lol = 'niglets';


module.exports.run = async (bot, message, args, admins, staff) => {
  
  message.delete();
  if(message.content.includes('process.env.')) {
  
    message.channel.send('Env data is not allowed to be released')
  
  } else {
    
      if(!admins.includes(message.author.id)) {
        
        message.channel.send
            ({embed:{
            title:  'Error',
            fields:
                [
                  {
                    name:'Info: The command you used was not recognised',
                    value: 'Sorry about that'
                  }
                ],
              color: 0xff0000
            }}).then(msg => msg.delete(5000)).then(msg => message.delete(10))
        
      } else {
       try {
       
         let code = args.join(" ")
         let evaled = eval(code)
         

         if(typeof evaled !== "string")
           evaled = require("util").inspect(evaled);
         
         let embed = new Discord.RichEmbed()
         .setTitle('Evaluation')
         .setColor(0x00ff00)
         .setDescription(`**${code}**`)
         .addField('Evaluated:',`\`\`\`${evaled}\`\`\``, true)
         message.channel.send(embed)
       } catch(err) {
         
         let embed = new Discord.RichEmbed()
         .setTitle(`**ERROR**`)
         .setDescription(`\`\`\`x1\n${clean(err)}\n\`\`\``)
         .setColor(0xff0000)
       
         message.channel.send(embed);
         }
       }
        
     }
}
      function clean(text) {
      
        if(typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
          return text;
        
      }

module.exports.help = {

  name: "eval"
  
}
