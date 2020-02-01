/*const {GoogleApi} = require("../config.json");
const play = require("./play")
const ytdl = require('ytdl-core')
const search = require('youtube-search');
module.exports = function(args, message) {
  const streamOptions = { seek: 0, volume: 0.3, passes: 1 };
  const broadcast = message.client.createVoiceBroadcast();
  const opts = {
    type:"video",
    maxResults: 1,
    key: GoogleApi
  };

  if(message.guild && message.member.voiceChannel){
    Promise.all([message.member.voiceChannel.join(), search(message.content, opts)])
    .then(values => {
      const connection = values[0]
      const results = values[1].results
      const stream = ytdl(results[0].link, {filter: 'audioonly'});
      broadcast.playStream(stream, streamOptions);
      const dispatcher = connection.playBroadcast(broadcast, streamOptions);
      return ytdl.getInfo(results[0].link);
    })
    .then(info =>{
      message.reply("Now playing `" + info.title + "`")
      .catch(console.error);
    })
  };
}

/*const {GoogleApi} = require("../config.json");
const play = require("./play")
const ytdl = require('ytdl-core')
const search = require('youtube-search');
module.exports = function(args, message) {
  const streamOptions = { seek: 0, volume: 0.3, passes: 1 };
  const broadcast = message.client.createVoiceBroadcast();
  const opts = {
    type:"video",
    maxResults: 1,
    key: GoogleApi
  };

    if(message.guild && message.member.voiceChannel){
      message.member.voiceChannel.join()
      .then(connection => {
          search(message.content, opts, function(err, results){
          if(err){ 
            console.log(err);
            console.dir(results);
            return
          }
          const stream = ytdl(results[0].link, {filter: 'audioonly'});
          broadcast.playStream(stream, streamOptions);
          const dispatcher = connection.playBroadcast(broadcast, streamOptions);
          ytdl.getInfo(results[0].link)
          .then(info =>{
            message.reply("Now playing `" + info.title + "`")
            .catch(console.error);
          })
        })
      })
  };
}*/
