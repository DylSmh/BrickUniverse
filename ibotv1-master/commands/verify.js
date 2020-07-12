
const request= require('request');
const db = require('quick.db')

	  exports.run = async (Discord, client, message, args) => {
// server.js
// where your node app starts

// init project
      

const express = require('express');
const app = express();
var brickuniverseapis = require('brickuniverseapis')


var connection = brickuniverseapis.createConnection({}); // Do not remove this, it connects this to our database.
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

	
      
  })
let sql = `SELECT * FROM beta_users WHERE id=`+ args.join(" ");
connection.query(sql, [true], (error, results, fields) => {
    if (error) {
    
     const embed1 = new Discord.RichEmbed()
		   		   .setColor("RED")
		   .setTitle("Error Occurred")

		   .setDescription("Please enter another vaild BrickUniverse User ID to verify!")

		return   message.channel.send(embed1)
  }     
     		
    const reason = args.join(" ")


     
let fs = require('fs')

let premium = JSON.parse(fs.readFileSync("./premium2.json", "utf8"));
 
   
const code = message.author.id

            premium[message.author.id] = {
     authorid : message.author.id,
            active : 1,
                           username : results[0].username,
                                         id : results[0].id,
                                                       level : results[0].power


            }
      fs.writeFileSync("./premium2.json", JSON.stringify(premium), (err) => {
      if (err) console.error(err)
    })
      if(premium[message.author.id].active === 1) {
   
         const embed = new Discord.RichEmbed()
		   .setColor("RANDOM")
		   .setThumbnail("https://www.brickuniverses.com/shop_storage/thumbnails/" + reason + ".png")
		   .setTitle("You have Verified Successfully!")
       		   .addField("Profile URL: ", "https://www.brickuniverses.com/user.php?id="+ results[0].id)

       		   .addField("Username: ", results[0].username)

         .addField("ID: ", results[0].id)
var role22 = message.guild.roles.find(role => role.name === "Linked Account");
message.member.addRole(role22);
        var role3 = message.guild.roles.find(role => role.name === "Say !verify [user id]");
message.member.removeRole(role3);
     
// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):

// or the person who made started the command: let member = message.member;

//adds the role

 message.channel.send(embed)
  		        message.guild.members.get(message.author.id).setNickname(results[0].username + " ["+results[0].id+"]");

    }
               
        
   
    })

      
      
  
      
  
                
       



connection.end();
    }
                    
  
           
  

                 
    
  