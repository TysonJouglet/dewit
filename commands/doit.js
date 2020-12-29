module.exports = {
	name: 'doit',
	description: 'Play the doit audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['doit']);
	},
};