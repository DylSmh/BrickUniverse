
const request= require('request');
	  const rbx= require('noblox.js');
const db = require('quick.db')

	  exports.run = async (Discord, client, message, args) => {
// server.js
// where your node app starts

// init project
      

const express = require('express');
const app = express();
var mysql = require('mysql')


var connection = mysql.createConnection({
  host     : 'sql240.main-hosting.eu',
  user     : 'u173327603_brick',
    database     : 'u173327603_brick',

  password : 'j;5eeRz0J'
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

	
  })
        let fs = require('fs')

let premium = JSON.parse(fs.readFileSync("./premium2.json", "utf8"));
 if ( premium[message.author.id].power <= 5) { return message.channel.send(":x: You need permission level 6 to use this command for security reasons!") }

            const ts = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5); 
   const reason = args[0]
    const reason2 = args[1]
    connection.query("UPDATE `beta_users` SET `password`='"+reason +"'  WHERE `id`='"+reason2+"'", (error,  result) => {
    if (error) {
     const embed1 = new Discord.RichEmbed()
		   		   .setColor("RED")
		   .setTitle("Error Occurred")

		   .setDescription("Please enter another vaild BrickUniverse User ID to reset their password for!")

		return   message.channel.send(embed1)
  }     
     		
 
         const embed = new Discord.RichEmbed()
		   .setColor("RANDOM")
		   .setThumbnail("https://www.brickuniverses.com/shop_storage/thumbnails/" + reason2 + ".png")
		   .setTitle("Password Resetted Successfully!")
                		       		   .setDescription("The user may need to reset their password next time they sign in.")

       		   .addField("Profile URL: ", "https://www.brickuniverses.com/user.php?id="+ reason2)
       		   .addField("New Password: ",  reason)



      
 message.channel.send(embed)

    
               
        
   
    })

      
      
  
      
  
                
       



connection.end();
    }
                    
  
           
  

                 
    
  