
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
let sql = `SELECT * FROM moderation WHERE user_id=`+ args.join(" ") + ` AND active=true`;
connection.query(sql, [true], (error, results, fields) => {
    if (error) {
    
     const embed1 = new Discord.RichEmbed()
		   		   .setColor("RED")
		   .setTitle("Error Occurred")

		   .setDescription("Please enter another vaild BrickUniverse User ID to see the ban details!")

		return   message.channel.send(embed1)
  }     
     		
    const reason = args.join(" ")


       const embed = new Discord.RichEmbed()
		   .setColor("#00ff00")
		   .setThumbnail("https://www.brickuniverses.com/shop_storage/thumbnails/" + args.join(" ") + ".png" || "Blank")
		   .setTitle("Ban Details for User ID: " + args.join(" ") || "Blank")
		   .addField("User ID: ", results[0].user_id || "Blank")
       		   .addField("Admin ID: ", results[0].admin_id || "Blank")

       		   .addField("Reason: ", results[0].admin_note || "Blank")
		   .addField("Length: ", results[0].length || "Blank")
		   .addField("Issued: ", results[0].issued || "Blank")

		   message.channel.send(embed),

   
                 {}
       

});

connection.end();
    }
                    
  
              
            
    
  