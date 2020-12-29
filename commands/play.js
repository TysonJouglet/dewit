const clipsSpec = require('../clips.json');
const Clip = require('../Clip.js');
const clips = new Map();
const path = require('path');

function loadAudio() {

  clipsSpec.clips.forEach(clipSpec => {
    const clip = new Clip(clipSpec.name, clipSpec.volume, clipSpec.file);
    clips.set(clip.name, clip);
  });

}

function playClip(clipName, connection, audioPath){
  const clip = clips.get(clipName);
  const dispatcher = connection.play(path.join(audioPath,clip.file), {
    volume: clip.volume
  });
}

module.exports = {
	name: 'play',
	description: 'Play an audio clip in your current voice channel',
	execute: async ({ message, paths }, args) => {
    if (!args.length) {
      return message.channel.send(`You didn't tell me what to play, ${message.author}!`);
    } else if (!message.member.voice.channel) {
      return message.channel.send(`You are not in a voice channel, ${message.author}!`);  
    }else if(!clips.has(args[0])){
      return message.channel.send(`I do not know that one, ${message.author}!`);  
    }

    const connection = await message.member.voice.channel.join();

    playClip(args[0], connection, paths.audio);
    
  }
};

loadAudio();