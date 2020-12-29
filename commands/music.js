const ytdl = require('ytdl-core');
let dispatcher;
let connection

function play(videoUrl){
  dispatcher = connection.play(ytdl(videoUrl, { filter: 'audioonly' }),{
    volume: 0.01
  });
}

function setVolume(volume){
  volume = Math.min(Math.max(0,volume),2);

  dispatcher.setVolume(volume);
}

let videos = new Set();
videos.add('rJlY1uKL87k');
videos.add('GdzrrWA8e7A');

let queue = videos.values();

module.exports = {
  name: 'music',
  aliases: ['m'],
  description: 'Play some tunes that your friends will totally enjoy...',
  execute: async ({ message }, args) => {
    
    if(!message.member.voice.channel){
      return message.channel.send(`You are not currently in a voice channel, ${message.author}!`);
    }

    connection = await message.member.voice.channel.join();

    let subCommand;

    if(args.length){
      subCommand = args.shift();
    }

    if(!subCommand || ['play','p'].includes(subCommand)){
      play('https://www.youtube.com/watch?v=GdzrrWA8e7A');
    } else if(['pause','ps'].includes(subCommand)){
      dispatcher.pause();
    } else if(['resume','r'].includes(subCommand)){
      dispatcher.resume();
    } else if(['youtube','yt'].includes(subCommand)){
      let videoUrl;
      const video = args.shift();
      if(ytdl.validateID(video)){
        videoUrl = `https://www.youtube.com/watch?v=${video}`;
      } else if(ytdl.validateURL(video)){
        videoUrl = video;
      } else {
        return message.channel.send(`I dont think that is a valid video :(`);
      }
      play(videoUrl);
    } else if (['next','n'].includes(subCommand)){
      const nextID = queue.next().value;
      play(nextID);
    } else if (/^\++$/gm.exec(subCommand)){
      let volume = Math.min(subCommand.length,5) * 0.1;
      let newVolume = dispatcher.volume + volume;
      console.info(`setting volume to ${newVolume}`);
      setVolume(newVolume);
    } else if (/^\-+$/gm.exec(subCommand)){
      let volume = Math.min(subCommand.length,5) * -0.1;
      let newVolume = dispatcher.volume + volume;
      console.info(`setting volume to ${newVolume}`);
      setVolume(newVolume);
    } else if(['boss','b'].includes(subCommand)){
      play('CPgPxGX6nNo');
    } else if(['volume','v'].includes(subCommand)){

      let volume = parseFloat(args.shift());
      
      if(!volume && volume != 0){
        return message.channel.send('Include a volume level between 0 and 2!');
      } else if (isNaN(volume)){
        return message.channel.send('Make sure volume is a number between 0 and 2');
      }

      setVolume(volume);

    } 
  },
};