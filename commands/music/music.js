const ytdl = require('ytdl-core');
const { Command } = require('discord.js-commando');
// const Jukebox = require('../../Jukebox');

module.exports = class MusicCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'music',
			aliases: ['m'],
			group: 'music',
			memberName: 'music',
			description: 'Play and manage music in a voice channel.',
			args: [
				{
					key: 'text',
					prompt: 'What action would you like to take?',
					type: 'string',
				},
			],
		});
    // this.jukebox = new Jukebox();
	}

	async run(message, { text }) {
    const connection = await message.member.voice.channel.join();
    connection.play(ytdl(text, { filter: 'audioonly' }));
	}
};