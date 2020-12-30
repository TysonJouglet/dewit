const AudioCommand = require('./audio.js')

module.exports = class CreamCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'cream',
      aliases: [],
      memberName: 'cream',
      description: 'Play an cream clip',
    });
  }
};