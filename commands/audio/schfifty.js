const AudioCommand = require('./audio.js')

module.exports = class SchfiftyCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'schfifty',
      aliases: [],
      memberName: 'schfifty',
      description: 'Play an schfifty clip',
    });
  }
};