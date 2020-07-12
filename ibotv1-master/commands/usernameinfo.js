
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
let sql = `SELECT * FROM beta_users WHERE usernameL='`+ args.join(" ") + `'`;
connection.query(sql, (error, results, fields) => {
 
     		
    const reason = args.join(" ")

  let fs = require('fs')

let premium = JSON.parse(fs.readFileSync("./premium2.json", "utf8"));
 if ( premium[message.author.id].power <= 5) { return message.channel.send(":x: You need permission level 6 to use this command for security reasons!") }

       const embed = new Discord.RichEmbed()
		   .setColor("RANDOM")
		   .setThumbnail("https://www.brickuniverses.com/shop_storage/thumbnails/" + reason + ".png")
		   .setTitle("User Details for Username: " + args.join(" "))
       		   .addField("Profile URL: ", "https://www.brickuniverses.com/user.php?id="+ results[0].id)

		   .addField("User ID: ", results[0].id || "Blank")
       		   .addField("Username: ", results[0].username || "Blank")

       		   .addField("Gender: ", results[0].gender || "Blank")
		   .addField("Date Registered: ", results[0].date || "Blank")
		   .addField("Last Online: ", results[0].last_online || "Blank")
		   .addField("Profile Views: ", results[0].views || "Blank")
		   .addField("Profile Description: ", results[0].description || "Blank")
		   .addField("Bucks: ", results[0].bucks || "Blank")
		   .addField("Bits: ", results[0].bits || "Blank")
		   .addField("Permission Level ID: ", results[0].power || "Blank")

		   message.channel.send(embed),

   
                 {}
       

});

connection.end();
    }
                    
  
              
            
    
  