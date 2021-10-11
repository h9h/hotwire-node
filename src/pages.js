const {view} = require('./views')

const getPage = page => async (ctx) => {
	ctx.type = 'html'
	ctx.body = await view(page, {})
}

module.exports = {
	getPage
}
