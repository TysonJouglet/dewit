const AudioCommand = require('./audio.js')

module.exports = class WhistleCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'whistle',
      aliases: [],
      memberName: 'whistle',
      description: 'Play an whistle clip',
    });
  }
};