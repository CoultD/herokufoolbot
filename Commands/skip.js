const play = require("./play")
module.exports = function(args, message) {
    if(message.guild && message.guild.voiceConnection){
        play.broadcastStream.end()
    }
}