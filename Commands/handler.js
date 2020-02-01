const play = require('./play')
const yt = require('./youtube-search')
const resume = require('./resume')
const pause = require('./pause')
const help = require('./help')
const ImageCommand = require('./img')
const depression = require('./depression')
const Discord = require('discord.js')
const roll = require('./roll')
const avatar = require('./avatarUrl')
const skip = require('./skip')
const commands = require('./commands')
const next = require('./next')
const poggersfish = require('./poggersfish')
const disconnect = require('./disconnect')

exports.imageClasses = {}
exports.handle = function (message) {

    let fullCommand = message.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let args = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + args) // There may not be any arguments

    if(primaryCommand == "help") {
        help(args,message)
    }
    if(primaryCommand == "img") {
        if(!this.imageClasses[message.guild.id]){
            this.imageClasses[message.guild.id] = new ImageCommand()
        }
        this.imageClasses[message.guild.id].run(args,message)
    }
    if (primaryCommand == "depression") {
        depression(args, message)
    }
    if (primaryCommand == "play") {
        play.play(args, message)
    }
    if (primaryCommand == "pause") {
        pause(args, message)
    }
    if (primaryCommand == "resume") {
        resume(args, message)
    }
    if (primaryCommand == "yt"){
        yt(args, message)
    }
    if (primaryCommand == "roll"){
        roll(args, message)
    }
    if (primaryCommand == "avatar"){
        avatar(args, message)
    }
    if (primaryCommand == "skip"){
        skip(args, message)
    }
    if (primaryCommand == "commands"){
        commands(args, message)
    }
    if (primaryCommand == "n"){
        next(args, message)
    }
    if (primaryCommand == "poggers"){
        poggersfish(args, message)
    }
    if (primaryCommand == "disconnect"){
        disconnect(args, message)
    }
}