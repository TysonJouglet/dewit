module.exports = {
	name: 'ghoul',
	description: 'Play the ghoul audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['ghoul']);
	},
};