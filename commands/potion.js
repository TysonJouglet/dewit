module.exports = {
	name: 'potion',
	description: 'Play the potion audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['potion']);
	},
};
