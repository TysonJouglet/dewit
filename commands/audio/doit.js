const AudioCommand = require('./audio.js')

module.exports = class DoitCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'doit',
      aliases: [],
      memberName: 'doit',
      description: 'Play an doit clip',
    });
  }
};