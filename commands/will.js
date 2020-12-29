module.exports = {
	name: 'will',
	description: 'Play the will audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['will']);
	},
};
