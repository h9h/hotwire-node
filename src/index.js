const koa = require('koa')
const router = require('koa-route')
const serve = require('koa-static')
const send = require('koa-send')
const app = new koa()
const path = require('path')

// Logik
const {messagesGetAll} = require('./messages')
const {getPage} = require('./pages')

// --------------------------------------------------------------
// Middleware
// --------------------------------------------------------------
app.use(async (ctx, next) => {
	const start = Date.now()
	await next()
	const ms = Date.now() - start
	console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// --------------------------------------------------------------
// Static Files
// --------------------------------------------------------------
const publicFiles = path.join(__dirname, '..', 'public')
console.log('Serving static files from ', publicFiles)

app.use(serve(path.join(__dirname, 'public')))
app.use(async function (ctx, next) {
		return send(ctx, '/index.html', {
			root: publicFiles
		}
	)
	.then(() => next())
})

// --------------------------------------------------------------
// Integrating Stimulus
// --------------------------------------------------------------
const webpack = require("webpack")
const webpackConfig = require("./webpack.config.js")
const koaWebpack = require("koa-webpack")

const compiler = webpack(webpackConfig)
const middleware = koaWebpack({ compiler })
/* app.use(async ctx => {
	await ctx.use(middleware)
}) */
app.use(middleware)




// --------------------------------------------------------------
// Routes
// --------------------------------------------------------------
console.log('Defining routes')

// Jeder Key entspricht einer Route, wobei der Value der zugehörige Handler ist
const routes = {
	"/pageMessages": getPage("pageMessages.html"),
	"/pageHelp": getPage("pageHelp.html"),
	"/messages": messagesGetAll,
}

Object.entries(routes).forEach(([route, handler]) => app.use(router.get(route, handler)))


// --------------------------------------------------------------
// Start server
// --------------------------------------------------------------
const server = app.listen(3000, function() {
	console.log('App is listening to http://localhost:3000');
});
