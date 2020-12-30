const AudioCommand = require('./audio.js')

module.exports = class WatchCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'watch',
      aliases: [],
      memberName: 'watch',
      description: 'Play an watch clip',
    });
  }
};