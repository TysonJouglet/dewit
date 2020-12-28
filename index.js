require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const path = require('path');
const TOKEN = process.env.TOKEN;

const paths ={
  audio : null
}

const prefix = '!';

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);

  paths.audio = path.join(__dirname, 'audio');
});


const commands = [
  {file : 'doit.mp3', volume: 1.5 }
];

async function getConnection(message){
  if (message.member.voice.channel) {
    return await message.member.voice.channel.join();
  }
  return undefined;
}

bot.on('message', async message => {

  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  console.info('message received');
  if (!message.content.startsWith(prefix)) return;
  if (!message.guild) return;

  connection = await getConnection(message);

  if(!connection) return;

  if (message.content === '!doit') {
    const dispatcher = connection.play(path.join(paths.audio,'doit.mp3'), {
      volume: 1.5,
    });
  }else if(message.content === '!will'){
    const dispatcher = connection.play(path.join(paths.audio,'will.mp3'), {
      volume: 1.2,
    });
  }else if(message.content === '!nice'){
    const dispatcher = connection.play(path.join(paths.audio,'nice.mp3'), {
      volume: 1.2,
    });
  }else if(message.content === '!balls'){
    const dispatcher = connection.play(path.join(paths.audio,'balls.mp3'), {
      volume: 1.2,
    });
  }else if(message.content === '!plums'){
    const dispatcher = connection.play(path.join(paths.audio,'plums.mp3'), {
      volume: 1.2,
    });
  }else if(message.content === '!watch'){
    const dispatcher = connection.play(path.join(paths.audio,'watch.mp3'), {
      volume: 1.2,
    });
  }else if(message.content === '!help'){
    let help = `\`\`\`
!begone
!doit
!will
!nice
!balls
!plums
!watch
-- in progress --
!whitles
!power
!schfifty
!ding
!potion\`\`\``;

    message.channel.send(help);
  }
  else if(message.content === '!begone'){
    message.member.voice.channel.leave();
  }
});