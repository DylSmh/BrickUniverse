const Discord = require("discord.js");


module.exports.run = async (Discord, client, message, args) => {

  const reason = message.content.split (" ").slice(1).join(" ");
if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a **Support Team** Role, please ask a server admin to make one!`);
//if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
message.guild.createChannel(`ticket-${message.author.id}`, "text").then (c => {
  let parent = message.guild.channels.find(c => c.name == "tickets");
  if (!parent) {
    message.channel.send("Please create a category called **tickets**")
    return;
  }
  if (!reason) {
    message.channel.send(":x: Please provide a reason why you need support. (Include as much detail as possible!)")
    return;
  }
  c.setParent(parent);
  let role = message.guild.roles.find("name", "Support Team");
    let role4 = message.guild.roles.find("name", "+ Epic Super Rank");

  let role2 = message.guild.roles.find("name", "@everyone");
      c.overwritePermissions(role, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      })
      c.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      })
     c.overwritePermissions(role4, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      })
      c.overwritePermissions(message.author, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      })
      message.channel.send(`:white_check_mark: Your support ticket has been created, #${c.name}.   It may take up to 2 - 5 hours for our <@699463355483553881> members to respond.`);
      const embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .addField(`Hey ${message.author.username}!`, `Please try to explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
        .addField(`Reason`, reason || `No reason specified`)
        .setFooter(`Sunset Support by AviaBays`)
        .setTimestamp()
        c.send(`<@${message.author.id}>`)
        c.send ({ embed: embed });
      }).catch(console.error);

}
