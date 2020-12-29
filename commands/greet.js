module.exports = {
	name: 'greet',
	description: 'Say something nice',
	execute(context, args) {

    const message = context.message;

    const messages = [
      'Have a great day',
      'Eat a dick',
      'WASSSSUUUUUUUPPP',
      'Sup',
      'Stay a while and listen'
    ]

		message.author.send( `${messages[Math.floor(Math.random() * messages.length)]} ${ message.author }.`);
	},
};