
const request= require('request');
	  const rbx= require('noblox.js');
const db = require('quick.db')

	  exports.run = async (Discord, client, message, args) => {
// server.js
// where your node app starts

// init project
      

const express = require('express');
const app = express();
var mysql = require('brickuniverseapis')


var connection = brickuniverseapis.createConnection({}); // Do not remove this, it connects this to our database.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

	
      
  })
	
      
  })
      let fs = require('fs')

let premium = JSON.parse(fs.readFileSync("./premium2.json", "utf8"));
 
let sql = `SELECT * FROM beta_users WHERE id=`+  premium[message.author.id].id;
connection.query(sql, [true], (error, results, fields) => {
    if (error) {
    
   
  }     
     		
    const reason = args.join(" ")


       const embed = new Discord.RichEmbed()
		   .setColor("RANDOM")
		   .setThumbnail("https://www.brickuniverses.com/shop_storage/"+ results[0].id+".png")
		   .setTitle("Your User Profile")

		   .addField("Your Username: ", results[0].username)

       		   .addField("Your ID: ", results[0].id)
              		   .addField("Permission Level: ", results[0].power)

		   .addField("Profile URL: ","https://www.brickuniverses.com/user.php?id="+ results[0].id)
	

		   message.channel.send(embed),

   
                 {}
       

});

connection.end();
    }
                    
  
              
            
    
  
