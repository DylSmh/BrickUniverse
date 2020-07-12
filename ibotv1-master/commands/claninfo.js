
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
let sql = `SELECT * FROM clans WHERE id=`+ args.join(" ");
connection.query(sql, [true], (error, results, fields) => {
    if (error) {
    
     const embed1 = new Discord.RichEmbed()
		   		   .setColor("RED")
		   .setTitle("Error Occurred")

		   .setDescription("Please enter another vaild BrickUniverse Clan ID to see the clan infomation details!")

		return   message.channel.send(embed1)
  }     
     		
    const reason = args.join(" ")


       const embed = new Discord.RichEmbed()
		   .setColor("RANDOM")
		   .setThumbnail("https://www.brickuniverses.com/shop_storage/thumbnails/" + reason + ".png")
		   .setTitle("Clan Details for Clan ID: " + args.join(" "))
       		   .addField("Clan URL: ", "https://www.brickuniverses.com/clan.php?id="+ results[0].id)

		   .addField("Clan ID: ", results[0].id || "Blank")
       		   .addField("Clan Name: ", results[0].name || "Blank")

       		   .addField("Owner ID: ", results[0].owner_id || "Blank")
		   .addField("Tag: ", results[0].tag || "Blank")
		   .addField("Member Count: ", results[0].members || "Blank")
       		   .addField("Clan Description: ", results[0].description || "Blank")

         .addField("Approved: ", results[0].approved || "Blank")

		   message.channel.send(embed),

   
                 {}
       

});

connection.end();
    }
                    
  
              
            
    
  