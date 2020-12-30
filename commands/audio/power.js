const AudioCommand = require('./audio.js')

module.exports = class PowerCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'power',
      aliases: [],
      memberName: 'power',
      description: 'Play an power clip',
    });
  }
};