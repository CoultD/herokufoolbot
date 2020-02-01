const processCommand = require('./Commands/handler')
const Discord = require('discord.js')
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    var currentPlaying = ["oliver still has no manga channel haha","funny text","haha yes"]
    var randomPlaying = currentPlaying[Math.floor(currentPlaying.length * Math.random())]
    client.user.setActivity(randomPlaying, {type: "PLAYING"});
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })  
})
client.on('message', message => {
    if (message.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    if(message.content.startsWith(`${prefix}`)){
        processCommand.handle(message);
    }
})
client.on('message', message => {
        /*if(message.member.hasPermission(["KICK_MEMBERS","BAN_MEMBERS"])) {
            if(message.content.startsWith(`${prefix}kick`)){
                let member = message.mentions.members.first();
                member.kick().then((member) => {
                message.channel.send(":wave: " + member.displayName + " Has been yotted")
            })
        }
        }*/
        //let generalChannel = client.channels.get("221786958718959616")
        
    if(!message.guild) return;
    if(message.content === (`${prefix}join`)) {
        if(message.member.voiceChannel){
            message.member.voiceChannel.join()
            .then(connection => {
                message.reply("Joined VC");
            })
            .catch(console.log);
        }else{
            message.reply("Join a VC first");
        }
    }
         
    if(!message.guild) return;
    if(message.content === (`${prefix}disconnect`)) {
        message.member.voiceChannel.leave()
    }
})
    client.login(token)