
const request= require('request');
	  const rbx= require('noblox.js');
const db = require('quick.db')

	  exports.run = async (Discord, client, message, args) => {
// server.js
// where your node app starts

// init project
      

const express = require('express');
const app = express();

       const embed = new Discord.RichEmbed()
		   .setColor("RANDOM")
		   .setTitle("Help Menu")

		   
		   .addField("`!bandetails`"," View the ban reason." )
		  		   .addField("`!checkstatus`"," See if you are verified." )
		  		   .addField("`!claninfo`"," View a clan info." )
		  		   .addField("`!close`"," Close a support ticket." )
		  		   .addField("`!eval`"," Run a command via eval." )
		  		   .addField("`!help`"," View this menu." )
		  		   .addField("`!iteminfo`"," View a asset ID info." )
		  		   .addField("`!new`"," Open a new support ticket." )
		  		   .addField("`!permlevel`"," View your permission level." )

		  		   .addField("`!resetpass`"," Reset your password." )
		  		   .addField("`!suggest`"," Suggest a new feature." )
		  		   .addField("`!userinfo`"," View a user info via ID." )
		  		   .addField("`!usernameinfo`"," View a user info via Username." )
		  		   .addField("`!verify`"," Verify your account." )

		   message.channel.send(embed)

  
       





            
  
    }