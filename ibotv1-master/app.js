

const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const { get } = require("snekfetch"); 
const superagent = require("superagent");
const weather = require('weather-js');
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const fs = require("fs");


 const enmap = client.levelsystem;


var randomColor = Math.floor(Math.random() * 16777215).toString(16);
   
client.on('ready', () => {
    let ver = 4503579
  
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
client.user.setStatus('online')
 
 client.user.setPresence({ activity: { name: 'with discord.js' }, status: 'online' })

});

const newUsers = [];

client.on("ready", () => {
  console.log("I am ready!");
});


client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
   const userlist = newUsers.map(u => u.toString()).join(" ");

          
client.on('message', message => {

   let sender = message.author;
   if (sender.bot) return;
  if (message.channel.type === 'dm') {
        return;
  }
    var guildid = message.guild.id

       db.fetch(`guildPrefix_${guildid}`).then(i => {





   
   var guildid = message.guild.id
    db.fetch(`guildPrefix_${guildid}`).then(i => {

        let prefix = i || '!'

        let msg = message.content.toLowerCase();
      let args = message.content.slice(prefix.length).trim().split(" ");
        let cmd = args.shift().toLowerCase();

        if (!message.content.startsWith(prefix)) return;

        try {

            let commandFile = require(`./commands/${cmd}.js`);
            commandFile.run(Discord, client, message, args);
            console.log(`${message.author.username} ran the command: ${cmd} sucessfully!`)
         
                  


        } catch (e) {

            console.log(e);

        } finally {
    
       }
    

//   }      
       

          
             

    
                                                 
                                                             
      
    
              
			
	
						
					
					
                
        
	
	}, 0);

  
       })
})

     
      
      

 

client.login(process.env.BOT_TOKEN); // Enter your token here
 
