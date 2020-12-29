module.exports = {
	name: 'watch',
	description: 'Play the watch audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['watch']);
	},
};
