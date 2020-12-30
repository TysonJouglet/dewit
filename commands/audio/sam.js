const AudioCommand = require('./audio.js')

module.exports = class SamCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'sam',
      aliases: [],
      memberName: 'sam',
      description: 'Play an sam clip',
    });
  }
};