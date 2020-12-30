require('dotenv').config();
const { TOKEN } = process.env;
const { prefix } = require('./config.json');
const path = require('path');

const Commando = require('discord.js-commando');

const bot = new Commando.Client({
  commandPrefix: prefix,
  owner: '149677764083974144'
});

bot.registry
  .registerGroups([
      ['misc', 'Assortment of random commands'],
      ['audio', 'Play audio clips in a voice channel'],
  ])
  // Registers all built-in groups, commands, and argument types
  .registerDefaults()
  .registerCommandsIn( path.join(__dirname, 'commands') );

bot.once('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity('with classified material 😈');
});

bot.on('error', console.error);

bot.login(TOKEN);