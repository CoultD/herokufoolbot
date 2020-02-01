const {GoogleApi} = require("../config.json");
const play = require("./play")
const ytdl = require('ytdl-core')
const search = require('youtube-search');
const validUrl = require('valid-url');

var queue = []
var playing = false
const streamOptions = { seek: 0, volume: 0.7, passes: 3 };
module.exports =  new class {
    constructor(){
        this.queue = []
        this.playing = false
        this.broadcastStream = null
    }
    async play(args, message) {
        const joinedArgs = args.join(" ");
        if(validUrl.isUri(joinedArgs)){
            this.queue.push({url:joinedArgs, message:message})
        }else{
            const opts = {
                type:"video",
                maxResults: 3,
                key: GoogleApi
            };
            if(message.guild && message.member.voiceChannel){
                const linkFinder = await search(joinedArgs, opts)
                this.queue.push({url:linkFinder.results[0].link, message:message})
            }
        }
        if(this.queue[0] && !this.playing){
            this.playNext(this.queue[0])
        }
    }
        playNext(video){
        const url = video.url
        const message = video.message

        if(message.guild && message.member.voiceChannel){
            message.member.voiceChannel.join()
            .then(connection => {
                const broadcast = message.client.createVoiceBroadcast();
                const stream = ytdl(url, {filter: "audioonly"});
                connection.playBroadcast(broadcast, streamOptions);
                this.broadcastStream = broadcast.playStream(stream, streamOptions)
                this.broadcastStream.on("end", reason => {
                    console.log("haha yes this ended")
                    this.playing = false
                    this.queue.shift()
                    if(this.queue[0]){
                        const that = this;
                        setTimeout(function(){
                            that.playNext(that.queue[0])
                        },1000)
                        console.log("playing Next: " + this.queue[0].url) 
                    }
                })
                ytdl.getInfo(url)
                    .then(info => {
                    message.reply("Now playing `" + info.title + "`")
                    .catch(console.error);
                    })
                this.playing = true
            })
        }
    }   
}