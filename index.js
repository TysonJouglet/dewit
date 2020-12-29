require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const path = require('path');
const { TOKEN, prefix } = process.env;

const paths = {
  audio : null
}

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  
  paths.audio = path.join(__dirname, 'audio');
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

async function getConnection(message){
  if (message.member.voice.channel) {
    return await message.member.voice.channel.join();
  }
  return undefined;
}

function canProcessMessage(message){
  
  // must be a command
  if (!message.content.startsWith(prefix)) return false;

  // cannot be a command issued by the bot
  if (message.author.username === bot.user.username) return false;

  return true;
}
async function isValidCommand(message) {

  // not really sure why this is needed but it was in the official documentation
  if (!message.guild) return false;


  connection = await getConnection(message);
  if(!connection) return false;

  //all good
  return true;  

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
  help += 'Am I being problematic? Use !gtfo to initiate self destruct! \n';
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

//MAIN
bot.on('message', async message => {

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  // guard clauses to immediately stop processing invalid messages
  if (!canProcessMessage(message)) return;

  if (!bot.commands.has(command)) return;

  try {
    const connection = await message.member.voice.channel.join();
    const commandContext = {
      message,
      process,
      bot,
      connection
    }
    bot.commands.get(command).execute(commandContext, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }

  // if(await isValidCommand(message)){

  //   if(command === 'help'){
  //     helpTheNoobs(message);
  //   }else if(command === 'gtfo'){
  //     bot.destroy();
  //     process.exit(0);
  //   }else if(command === 'begone'){
  //     message.member.voice.channel.leave();
  //   }else{      
  //     playClip(command);
  //   }
  // }else{
  //   //TODO
  //   //maybe use default funny fail message of some sort??
  //   message.channel.send(`${message.author.username} is a noob. Use !help noob skum.`);
  // }
 
});