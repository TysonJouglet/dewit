module.exports = {
	name: 'power',
	description: 'Play the power audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['power']);
	},
};