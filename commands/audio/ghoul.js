const AudioCommand = require('./audio.js')

module.exports = class GhoulCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'ghoul',
      aliases: [],
      memberName: 'ghoul',
      description: 'Play an ghoul clip',
    });
  }
};