module.exports = function(args, message) {
    if(message.guild && message.guild.voiceConnection){
        message.guild.voiceConnection.dispatcher.pause()
    }    
}