module.exports = function(args, message) {
    if(message.guild && message.guild.voiceConnection && message.member.voiceChannel){
        message.guild.voiceConnection.disconnect()
        return
    }
}