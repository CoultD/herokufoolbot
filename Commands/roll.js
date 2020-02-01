module.exports = function(args, message) {

    if(message.guild && message.channel){
        const joinedArgs = parseInt(args.join(" "),10)
        if(isNaN(joinedArgs)){
            return message.channel.send("Enter a number to roll when using $roll")
        }else{
        message.reply(":game_die:  `" + Math.floor(Math.random() * Math.floor(joinedArgs) +1)+ "`")
        }
    }
}