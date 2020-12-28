require('dotenv').config();

const Discord = require('discord.js');
const bot = new Discord.Client();
const path = require('path');
const TOKEN = process.env.TOKEN;
const prefix = '!';
const fs = require('fs'); 
const readline = require('readline');
const paths = {
  audio : null
}

var clips = new Map();

class Clip {
  constructor(name,volume){
    this.name = name;
    this.volume = volume;
  }
}

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);

  paths.audio = path.join(__dirname, 'audio');
});

async function getConnection(message){
  if (message.member.voice.channel) {
    return await message.member.voice.channel.join();
  }
  return undefined;
}

async function validate(message) {

  if (!message.content.startsWith(prefix)) return false;  
  if (!message.guild) return false;

  connection = await getConnection(message);
  if(!connection) return false;

  //all good
  return true;  

}

function handleFiles() {
  
  const file = readline.createInterface({ 
    input: fs.createReadStream('clipsAndVolumes.txt'), 
    output: process.stdout, 
    terminal: false
  });

  //add null file check? meh
  file.on('line', (line) => { 
     //split on pipe, should be fine for now?
    var clipNameAndVolume = line.split("|");
    clips.set(clipNameAndVolume[0],new Clip(clipNameAndVolume[0], clipNameAndVolume[1]));

    //debug
    //console.info(clips.get(clipNameAndVolume[0])); 
 }); 

}

function helpTheNoobs(message){

  //TODO
  // make this even better using special embedded bot messages: https://discordjs.guide/popular-topics/embeds.html#embed-preview
  
  let help = '\`\`\`\n';
  help += '+----------------------+\n';
  help += '|                      |\n';
  help += '|    HELP THE NOOBS    |\n';
  help += '|                      |\n';
  help += '+----------------------+\n';
  help += '\n';
  help += 'Dismiss me with !begone \n';
  help += '\n';
  help += 'Audio\n';
  help += '========================\n';

  clips.forEach(clip => {
    help += `${prefix + clip.name}\n`
  });

  help += '\n';
  help += '\n';  
  help += 'Thats all I know... for now!\n';
  help += '\`\`\`';

  message.channel.send(help);
}

function playClip(clipName){  

  //TODO
  //figure out why bot doesnt fire message on first call

  console.info('inside play clip');
  if(clips.has(clipName)){
    const clip = clips.get(clipName);
    let mp3FileName = `${clip.name}.mp3`;

    const dispatcher = connection.play(path.join(paths.audio, mp3FileName), {
      volume: clip.volume,
    });
    
  }else{
    console.info(`clip ${ clipName } not found`);
  }

}

//MAIN
bot.on('message', async message => {

    //Setup clipsAndVolumes for use
  handleFiles(); 

  console.info('message received');

  if(await validate(message)){

    //trying to limit the surface area of prefix throughout the code
    let commandName = message.content.replace(prefix,'');

    if(commandName === 'help'){
      helpTheNoobs(message);
    }else if(commandName === 'begone'){
      message.member.voice.channel.leave();
    }
    else{      
      playClip(commandName);
    }
  }else{
    //TODO
    //maybe use default funny fail message of some sort??
  }
 
});