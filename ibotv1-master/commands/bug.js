exports.run = (Discord, client, message, args) => {
 const type = args.join(" ")
    const thing = args.join(" ")
    const thing2 = args.join(" ")
    const suggestion = new Discord.RichEmbed()
       .setTitle(thing)
    .setDescription(`Reported By: ${message.author.tag}`)
     .setColor("RANDOM")
        message.channel.send(":white_check_mark: Success! You have successfully reported a new bug, our members will vote on it.")
	
                client.channels.get("726321167907946546").send("@here New Bug Report Below")

      client.channels.get("726321167907946546").send(suggestion).then(function (message) {
          message.react("👍")
          message.react("👎");
      return;
    }
   
        )
}
    
      
        
  