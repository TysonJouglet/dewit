const AudioCommand = require('./audio.js')

module.exports = class YeahCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'yeah',
      aliases: [],
      memberName: 'yeah',
      description: 'Play an yeah clip',
    });
  }
};