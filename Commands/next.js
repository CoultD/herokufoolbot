const { RichEmbed } = require('discord.js');
const handler = require("./handler")
module.exports = function(args, message) {
    if(!handler.imageClasses[message.guild.id])return;
    const image = handler.imageClasses[message.guild.id];
    if(image.storage.length !== 0){
       image.storage.shift()
       message.delete()
       const embed = new RichEmbed().setAuthor(message.author.username).setDescription("`$n` for next image").setImage(image.storage[0].url)
       image.message.edit("", embed);
    }else{
        message.channel.send("```There are no more images available.```")
    }
}