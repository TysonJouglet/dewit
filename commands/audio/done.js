const AudioCommand = require('./audio.js')

module.exports = class DoneCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'done',
      aliases: [],
      memberName: 'done',
      description: 'Play an done clip',
    });
  }
};