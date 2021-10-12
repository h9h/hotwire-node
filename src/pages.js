const {view} = require('./views')

const getPage = page => async (req, res) => {
	res.send(await view(page, {}))
}

module.exports = {
	getPage
}
