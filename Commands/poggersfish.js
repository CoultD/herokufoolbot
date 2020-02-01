const Discord = require("discord.js")
module.exports = function(args, message) {
    const attachment = new Discord.Attachment("tenor.gif")
    message.channel.send(attachment)
}
