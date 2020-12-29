module.exports = {
	name: 'balls',
	description: 'Play the balls audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['balls']);
	},
};