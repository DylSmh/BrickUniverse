
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
    const id = args[0]
    const text = args[2]
    const asset = args[3]
    const bucks = args[4]
    const usage = args[5]

    connection.query("INSERT INTO `promo_code`(`creator`, `text`, `asset`, `bucks`, `usage2`) VALUES (" + id + ",'" + text + "','" + asset + "','" + bucks+ "','" + usage + "')", (error,  result) => {
    
       		
 
         const embed = new Discord.RichEmbed()
		   .setColor("RANDOM")
		   .setThumbnail("https://www.brickuniverses.com/shop_storage/thumbnails/" + id + ".png")
		   .setTitle("Successfully Created Promocode!")
                		       		   .setDescription("I have successfully created the promocode!")

       		   .addField("Profile URL: ", "https://www.brickuniverses.com/user.php?id="+ id)



      
 message.channel.send(embed)

    
               
        
   
    })

      

     



connection.end();
    }
                    
  
           
  

                                     
    
  