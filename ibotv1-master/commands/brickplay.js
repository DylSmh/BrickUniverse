
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

  password : '"j;5eeRz0J'
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

	
  })
            const ts = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5); 
    const reason2 = args[0]
    connection.query("UPDATE `beta_users` SET `power`='2'   WHERE `id`='"+reason2+"'", (error,  result) => {
    
       		
 
         const embed = new Discord.RichEmbed()
		   .setColor("RANDOM")
		   .setThumbnail("https://www.brickuniverses.com/shop_storage/thumbnails/" + reason2 + ".png")
		   .setTitle("How to get into BrickPlay")
                		       		   .setDescription("Simply go here: https://app.gitbook.com/@iiapplications/s/-brickuniverse/")




      
 message.channel.send(embed)

    
               
        
   
    })

      

     



connection.end();
    }
                    
  
           
  

                                     
    
  