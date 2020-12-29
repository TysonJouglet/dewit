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

function canProcessMessage(message){
  
  // must be a command
  if (!message.content.startsWith(prefix)) return false;

  // cannot be a command issued by the bot
  if (message.author.username === bot.user.username) return false;

  return true;
}

//MAIN
bot.on('message', async message => {

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  // guard clauses to immediately stop processing invalid messages
  if (!canProcessMessage(message)) return;

  if (!bot.commands.has(command)) return;

  try {

    const commandContext = {
      message,
      process,
      bot,
      paths,
      prefix
    }

    bot.commands.get(command).execute(commandContext, args);

  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }

});