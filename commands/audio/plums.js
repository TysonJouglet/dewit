const AudioCommand = require('./audio.js')

module.exports = class PlumsCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'plums',
      aliases: [],
      memberName: 'plums',
      description: 'Play an plums clip',
    });
  }
};