module.exports = {
	name: 'yeah',
	description: 'Play the yeah audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['yeah']);
	},
};
