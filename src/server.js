const express = require("express");
const webpeck = require("webpack");
const webpackMiddleware = require("webpack-dev-middleware")
const webpackConfig = require("./webpack.config")
const path = require("path");
const apiData = require("./backend")
const app = express();


// Logik
const { messagesGetAll } = require('./messages')
const { getPage } = require('./pages');
const { loadAllCards, loadPhaseOne, loadPhaseTwo, loadPhaseThree, loadPhaseFour } = require('./methods')

// --------------------------------------------------------------
// Static Files
// --------------------------------------------------------------
const publicFiles = path.join(__dirname, '..', 'public')
console.log('Serving static files from ', publicFiles)

app.use(express.static(publicFiles))

app.get('/', (request, response) =>{
    response.sendFile(publicFiles + '/index.html')
})

// --------------------------------------------------------------
// Integrating Stimulus
// --------------------------------------------------------------
app.use(webpackMiddleware(webpeck(webpackConfig)))


// --------------------------------------------------------------
// Routes
// --------------------------------------------------------------
console.log('Defining routes')

// Jeder Key entspricht einer Route, wobei der Value der zugehörige Handler ist
const routes = {
    "/pageMessages": getPage("pageMessages.html"),
    "/pageHelp": getPage("pageHelp.html"),
    "/test": getPage("overview.html"),
    "/messages": messagesGetAll,
    "/allCards": loadAllCards,
    "/phase1": loadPhaseOne,
    "/phase2": loadPhaseTwo,
    "/phase3": loadPhaseThree,
    "/phase4": loadPhaseFour
}

Object.entries(routes).forEach(([route, handler]) => app.use(route, handler));


// --------------------------------------------------------------
// Start server
// --------------------------------------------------------------
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Listening on port 3000");
});

/* apiData.refData(function(response) {
    console.log(response.refs[0].ref);
}) */

/* const ref = apiData.refData(function (response) {
    return (response.refs[0].ref);
})

console.log(ref);

apiData.prismicData(function(response) {
    console.log(response);
})

console.log("URL: " + apiData.fullUrl);
console.log("ref: " + apiData.ref);

 */

apiData.getData()