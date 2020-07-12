const Discord = require("discord.js");


module.exports.run = async (Discord, client, message, args) => {
 
 if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel!`);

        message.channel.delete()

  



}
