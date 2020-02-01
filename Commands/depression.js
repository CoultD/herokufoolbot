const Discord = require("discord.js")
module.exports = function(args, message) { 
    const attachment = new Discord.Attachment("emote.png")
    message.channel.send(attachment)
}