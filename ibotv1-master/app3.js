// TGS-Bot
// Version: 0.9 PRE-ALPHA / PRE-REALEASE
// Discord Code: 

const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
const { get } = require("snekfetch"); 
const superagent = require("superagent");
const weather = require('weather-js');
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const fs = require("fs");
var rbx = require('noblox.js');
client.admins = ['481941149620371462'];
client.code = new Enmap({provider: new EnmapLevel({name: "codes"})});
client.premiumusers = new Enmap({provider: new EnmapLevel({name: "premusers"})});
client.premiumuserstext = new Enmap({provider: new EnmapLevel({name: "premiumuserstext"})});
client.groupid5 = new Enmap({provider: new EnmapLevel({name: "groupid5"})});

client.groupid2 = new Enmap({provider: new EnmapLevel({name: "groupid2"})});
client.cooldowntransfer = new Enmap({provider: new EnmapLevel({name: "cooldowntransfer"})});
client.blacklist = new Enmap({provider: new EnmapLevel({name: "blacklist"})});
client.userid2 = new Enmap({provider: new EnmapLevel({name: "userid2"})});
client.userid90 = new Enmap({provider: new EnmapLevel({name: "userid90"})});
client.userid90reason = new Enmap({provider: new EnmapLevel({name: "userid90reason"})});
client.transferstatus = new Enmap({provider: new EnmapLevel({name: "transferstatus"})});

client.db1 = new Enmap({provider: new EnmapLevel({name: "blacklisted"})});
client.group = new Enmap({provider: new EnmapLevel({name: "groupid"})});
client.redcodes = new Enmap({provider: new EnmapLevel({name: "redeemedcodes"})});
client.cookie = new Enmap({provider: new EnmapLevel({name: "cookie"})});
client.maxrank = new Enmap({provider: new EnmapLevel({name: "maximumrank"})});
client.minrnak = new Enmap({provider: new EnmapLevel({name: "minimumrank"})});
client.actives = new Enmap({provider: new EnmapLevel({name: "actives"})});

client.prefix = new Enmap({provider: new EnmapLevel({name: "prefix"})});
client.logs = new Enmap({provider: new EnmapLevel({name: "ranking"})});
client.warnings = new Enmap({provider: new EnmapLevel({name: "warning"})});
client.xp = new Enmap({provider: new EnmapLevel({name: "XP"})});
client.levelsystem = new Enmap({provider: new EnmapLevel({name: "levelsystem"})});
client.db = new Enmap({provider: new EnmapLevel({name: "users"})});
client.setupcmd = new Enmap({provider: new EnmapLevel({name: "setuplog"})});
client.nickname = new Enmap({provider: new EnmapLevel({name: "names"})});

 const enmap = client.levelsystem;


var randomColor = Math.floor(Math.random() * 16777215).toString(16);
   
client.on('ready', () => {
    let ver = 5776487
  
    console.log(`Logged in as ${client.user.tag}! There are no apparent major bugs.`);
    client.user.setStatus("online");
    client.user.setActivity('Sunrise Hotels and Resorts | !help', { type: 'PLAYING' });
    
});

const newUsers = [];

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
  newUsers[guild.id].set(member.id, member.user);

  if (newUsers[guild.id].size >1) {
    const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
          member.user.addRole("+ No Rank")

  guild.channels.find(channel => channel.name === "joins").send("Welcome to Sunrise Hotels founded by AviaBays, " + member.user + "!\n Join our ROBLOX group: https://www.roblox.com/groups/5776487/Sunrise-Hotels-and-Resorts");};
    newUsers[guild.id].clear();
  
          

});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
   const userlist = newUsers.map(u => u.toString()).join(" ");

  guild.channels.find(channel => channel.name === "joins").send("Welcome to Sunrise Hotels founded by AviaBays, " + member.user + "!\n Join our ROBLOX group: https://www.roblox.com/groups/5776487/Sunrise-Hotels-and-Resorts");});
          
client.on('message', message => {

   let sender = message.author;
   if (sender.bot) return;
  if (message.channel.type === 'dm') {
     //   message.channel.send("**Unfortunately we can only read things in guilds (servers). The command prefix is '!' **")
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

        } catch (e) {

            console.log(e);

        } finally {

            console.log(`${message.author.username} ran the command: ${cmd} sucessfully!`)
          

       }
    

//   }      
       

          
             

    
    
    })
       })
}
)

      
      

 

client.login(process.env.BOT_TOKEN);
 