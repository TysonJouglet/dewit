const AudioCommand = require('./audio.js')

module.exports = class NiceCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'nice',
      aliases: [],
      memberName: 'nice',
      description: 'Play an nice clip',
    });
  }
};