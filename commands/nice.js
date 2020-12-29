module.exports = {
	name: 'nice',
	description: 'Play the nice audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['nice']);
	},
};