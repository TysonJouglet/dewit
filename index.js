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

//TODO : cleanup
//code not used below?
const commands = [
  {file : 'doit.mp3', volume: 1.5 }
];

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
  //could make this use the clipsAndVolumes list 
  //so we dont need to track name and volume changes in two spots

  let help = `\`\`\`
// !begone
// !doit
// !will
// !nice
// !balls
// !plums
// !watch
// !whitles
// !power
// !schfifty
// !ding
// !potion \`\`\``;

    message.channel.send(help);
}

function playClip(message){  

  //TODO
  //figure out why bot doesnt fire message on first call

  console.info('inside play clip');
  let msg = message.content;
  
  if(clips.has(msg)){
    var clip = clips.get(msg);
    let nameMinusExclamationMark = clip.name.replace(prefix,'');
    let mp3FileName = `${nameMinusExclamationMark}.mp3`;

    const dispatcher = connection.play(path.join(paths.audio, mp3FileName), {
      volume: clip.volume,
    });
    
  }else{
    console.info(`clip ${ msg } not found`);
  }

}

//MAIN
bot.on('message', async message => {

  //Setup clipsAndVolumes for use
  handleFiles(); 

  console.info('message received');

  if(await validate(message)){    
    if(message.content === '!help'){
      helpTheNoobs(message);
    }else if(message.content === '!begone'){
           message.member.voice.channel.leave();
    }
    else{      
      playClip(message);
    }
  }else{
    //TODO
    //maybe use default funny fail message of some sort??
  }
 
});