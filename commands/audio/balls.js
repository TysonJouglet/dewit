const AudioCommand = require('./audio.js')

module.exports = class BallsCommand extends AudioCommand {
  constructor(client) {
    super(client, {
      name: 'balls',
      aliases: [],
      memberName: 'balls',
      description: 'Play an balls clip',
    });
  }
};