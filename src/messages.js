// --------------------------------------------------------------
// Daten Mocking
// --------------------------------------------------------------
const {view} = require('./views')

const messages = [
	'Nachricht 0',
	'Nachricht 1',
]

const messagesGetAll = async (req, res) => {
	res.send(await view('messages.html', {messages}));
}

console.log('Test Rendering', view('messages.html', { messages }))

module.exports = {
	messagesGetAll
}
