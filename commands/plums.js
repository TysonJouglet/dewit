module.exports = {
	name: 'plums',
	description: 'Play the plums audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['plums']);
	},
};