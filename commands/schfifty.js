module.exports = {
	name: 'schfifty',
	description: 'Play the schfifty audio',
	execute(context, args) {
    context.bot.commands.get('play').execute(context,['schfifty']);
	},
};