exports.run = (Discord, client, message, args) => {
 const type = args.join(" ")
    const thing = args.join(" ")
    const thing2 = args.join(" ")
    const suggestion = new Discord.RichEmbed()
       .setTitle(thing)
    .setDescription(`Suggested By: ${message.author.tag}`)
     .setColor("RANDOM")
        message.channel.send(":white_check_mark: Success! You have suggested a new feature, our members will vote on it.")
	
                client.channels.get("725302870492053555").send("@here New Suggestion Below")

      client.channels.get("725302870492053555").send(suggestion).then(function (message) {
          message.react("👍")
          message.react("👎");
      return;
    }
   
        )
}
    
      
        
  