function helpTheNoobs({commands}, message, prefix){

  //TODO
  // make this even better using special embedded bot messages: https://discordjs.guide/popular-topics/embeds.html#embed-preview
  
  let help = '\`\`\`\n';
  help += '+----------------------+\n';
  help += '|                      |\n';
  help += '|    HELP THE NOOBS    |\n';
  help += '|                      |\n';
  help += '+----------------------+\n';
  help += '\n';

  commands.forEach(command => {
    help += `${prefix + command.name} : ${command.description}\n`
  });

  help += '\n';  
  help += 'Thats all I know... for now!\n';
  help += '\`\`\`';

  message.author.send(help);
}



module.exports = {
	name: 'help',
	description: 'List all commands!',
	execute: ({bot, message, prefix}) => {
    helpTheNoobs(bot, message, prefix);
	},
};