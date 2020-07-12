
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
 
   
const code = message.author.id
   if(!premium[message.author.id]) {
   
   
return message.channel.send(":x: You have not linked your Discord Account yet with your BrickUniverse Account. Say `!verify <id>` to verify now."  )        }

      if(premium[message.author.id].active == 1) {
        
        
         const embed = new Discord.RichEmbed()
		   .setColor("RANDOM")
		   .setThumbnail("https://www.brickuniverses.com/shop_storage/thumbnails/" + premium[message.author.id].id + ".png")
		   .setTitle("You are Verified!")
       		   .addField("Profile URL: ", "https://www.brickuniverses.com/user.php?id="+ premium[message.author.id].id)

       		   .addField("Username: ", premium[message.author.id].username || "Blank")
		
       		   .addField("Author ID: ", message.author.id || "Blank")

         .addField("ID: ",premium[message.author.id].id || "Blank")
 message.channel.send(embed)
  
 

 
 

      
      
  
      
  
                
       


             
      
connection.end();
    }
                    
  
           
  

                 
    
    }