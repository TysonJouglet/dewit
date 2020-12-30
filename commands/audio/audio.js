const { Command } = require('discord.js-commando');
const clipsSpec = require('../../clips.json');
const Clip = require('../../Clip.js');
const path = require('path');

module.exports = class AudioCommand extends Command {
  constructor(client, commandInfo = {}) {
  
    super(client, Object.assign({
      name: 'audio',
      aliases: [],
      group: 'audio',
      description:'play an audio clip',
      memberName: 'audio',
    }, commandInfo));

    this.clips = new Map();
    this.dispatcher =  null;

    this.loadAudio();

  }
 
  loadAudio() {
    clipsSpec.clips.forEach(clipSpec => {
      const clip = new Clip(clipSpec.name, clipSpec.volume, clipSpec.file);
      this.clips.set(clip.name, clip);
    });
  
  }

  async play(message, clipName){
    const clip = this.clips.get(clipName);
    const connection = await message.member.voice.channel.join();
    this.dispatcher = connection.play(path.join(__dirname,'clips',clip.file), {
      volume: clip.volume
    });
  }

  async run(message) {
    this.play(message, this.name);
  }
};