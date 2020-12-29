module.exports = {
	name: 'sam',
	description: 'Play the sam audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['sam']);
	},
};
