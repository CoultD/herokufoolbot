module.exports = function(args, message) {
    var joinedArgs = args.join(" ").toLowerCase()
    switch (joinedArgs) {
        case 'play':
            message.channel.send('`'+"Searches youtube with a URL or inputed keywords"+'`')
            break;
        case 'img':
            message.channel.send('`'+"Searched images that match inputed keywords"+'`')    
            break;
        case 'roll':
            message.channel.send('`'+"Rolls a random number from 1 to inputed number"+'`')    
            break;
        case 'avatar':
            message.channel.send('`'+"Embeds users avatar"+'`')    
            break;
    }
        //.then(message => console.log(message.content)) Prints resulted command in console log boom
    }