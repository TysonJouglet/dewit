const AudioCommand = require('./audio.js')

module.exports = class WillCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'will',
      aliases: [],
      memberName: 'will',
      description: 'Play an will clip',
    });
  }
};