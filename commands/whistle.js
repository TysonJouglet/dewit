module.exports = {
	name: 'whistle',
	description: 'Play the whistle audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['whistle']);
	},
};
