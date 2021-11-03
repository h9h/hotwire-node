const view = require("./views")

const loadAllCards = async (req, res) => {
    res.send(await view(card.html)) //data fehlt
}

// wird in getData der backend.js verwendet
async function test(data) {
    console.log("in function");
    async (req, res, data) => {
        res.send(await view(card.html, { data }))
    }
}

module.exports = {
    loadAllCards,
    test
}