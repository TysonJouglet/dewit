const AudioCommand = require('./audio.js')

module.exports = class DingCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'ding',
      aliases: [],
      memberName: 'ding',
      description: 'Play an ding clip',
    });
  }
};