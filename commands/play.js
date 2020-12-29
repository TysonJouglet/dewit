const clipsSpec = require('../clips.json');
const Clip = require('../Clip.js');
const clips = new Map();

function loadAudio() {

  clipsSpec.clips.forEach(clipSpec => {
    const clip = new Clip(clipSpec.name, clipSpec.volume, clipSpec.file);
    clips.set(clip.name, clip);
  });

}

function playClip(clipName, connection){
  const clip = clips.get(clipName);
  console.info(`../audio/${clip.file}`);
  const dispatcher = connection.play(`../audio/${clip.file}`, {
    volume: clip.volume
  });
}

loadAudio();

module.exports = {
	name: 'play',
	description: 'Play an audio click to your current voice channel',
  cooldown: 5,
	execute: ({ message, connection }, args) => {
    if (!args.length) {
      return message.channel.send(`You didn't tell me what to play, ${message.author}!`);
    } else if (!message.member.voice.channel) {
      return message.channel.send(`You are not in a voice channel, ${message.author}!`);  
    }else if(!clips.has(args[0])){
      return message.channel.send(`I do not know that one, ${message.author}!`);  
    }
    playClip(args[0], connection);
  }
};