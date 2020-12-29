module.exports = {
	name: 'done',
	description: 'Play the done audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['done']);
	},
};