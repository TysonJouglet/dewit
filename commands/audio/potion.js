const AudioCommand = require('./audio.js')

module.exports = class PotionCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'potion',
      aliases: [],
      memberName: 'potion',
      description: 'Play an potion clip',
    });
  }
};