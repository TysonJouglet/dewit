module.exports = {
	name: 'gtfo',
	description: 'Use this to eject the bot from the server',
	execute({ process, bot }, args) {
    bot.destroy();
		process.exit(0);
	},
};