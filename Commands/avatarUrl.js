/*const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const embed = new RichEmbed().setImage(message.author.avatarURL)*/
module.exports = function(args, message){
    var joinedArgs = args.join(" ").toLowerCase()
    var url;
    if(!message.guild)
    return
    else{
        for(member of message.guild.members.values()){
            if(joinedArgs !== member.displayName.toLowerCase()) continue
            url = member.user.avatarURL
        }
    }
    if(message.mentions.members && message.mentions.members.size > 0){
        url = message.mentions.members.values().next().value.user.avatarURL
    }
    if(joinedArgs.length == 0){
        url = message.author.avatarURL
    }
    message.channel.send({
        files: [{
            attachment: url,
            name: "avatar.png"
        }]
    });
}