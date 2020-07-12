
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
let sql = `SELECT * FROM shop_items WHERE id=`+ args.join(" ");
connection.query(sql, [true], (error, results, fields) => {
    if (error) {
    
     const embed1 = new Discord.RichEmbed()
		   		   .setColor("RED")
		   .setTitle("Error Occurred")

		   .setDescription("Please enter another vaild BrickUniverse Item ID to see the asset infomation details!")

		return   message.channel.send(embed1)
  }     
     		
    const reason = args.join(" ")


       const embed = new Discord.RichEmbed()
		   .setColor("RANDOM")
		   .setThumbnail("https://www.brickuniverses.com/shop_storage/"+results[0].type+"/" + reason + ".png")
		   .setTitle("Item Details for Asset ID: " + args.join(" "))
       		   .addField("Asset URL: ", "https://www.brickuniverses.com/item.php?id="+ results[0].id)

		   .addField("Asset ID: ", results[0].id || "Blank")
       		   .addField("Asset Name: ", results[0].name || "Blank")

       		   .addField("Owner ID: ", results[0].owner_id || "Blank")
		   .addField("Bucks: ", results[0].bucks || "Blank")
		   .addField("Bits: ", results[0].bits || "Blank")
       		   .addField("Asset Description: ", results[0].description || "Blank")
       		   .addField("Created: ", results[0].date || "Blank")
       		   .addField("Last Updated: ", results[0].last_updated || "Blank")
       		   .addField("Type: ", results[0].type || "Blank")
       		   .addField("Limited: ", results[0].collectible || "Blank")
       		   .addField("Likes: ", results[0].like2 || "Blank")
       		   .addField("Dislikes: ", results[0].dislike2 || "Blank")
       		   .addField("Offsale: ", results[0].offsale || "Blank")

         .addField("Approved: ", results[0].approved || "Blank")

		   message.channel.send(embed),

   
                 {}
       

});

connection.end();
    }
                    
  
              
            
    
  