module.exports = {
	name: 'cream',
	description: 'Play the cream audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['cream']);
	},
};