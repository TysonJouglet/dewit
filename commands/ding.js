module.exports = {
	name: 'ding',
	description: 'Play the ding audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['ding']);
	},
};