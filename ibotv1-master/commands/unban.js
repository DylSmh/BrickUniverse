
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
            const ts = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5); 
   const reason = args[0]
    const reason2 = args[1]
    connection.query("UPDATE `moderation` SET `active`='no'   WHERE `user_id`='"+reason2+"'", (error,  result) => {
    
       		
 
         const embed = new Discord.RichEmbed()
		   .setColor("RANDOM")
		   .setThumbnail("https://www.brickuniverses.com/shop_storage/thumbnails/" + reason2 + ".png")
		   .setTitle("Successfully Unbanned!")
                		       		   .setDescription("The user has now been unbanned from our site.")

       		   .addField("Profile URL: ", "https://www.brickuniverses.com/user.php?id="+ reason2)



      
 message.channel.send(embed)

    
               
        
   
    })

      

     



connection.end();
    }
                    
  
           
  

                                     
    
  