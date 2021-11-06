const {view} = require("./views")
const backend = require("./backend")





const loadAllCards = async (req, res) => {
    const data = await backend.getData()

    data.forEach(element => {
       // console.log(element.data.image.url)
    });
    
    res.send(await view('card.html', { data })) 
}


const loadPhaseOne = async (req, res) => {
    const data = []
    const all = await backend.getData()

    all.forEach(element => {
       if (element.data.filter[0].text == "Phase 1") {
           data.push(element)
       }
    });
    
    console.log(data);

    res.send(await view('card.html', { data })) 
}

const loadPhaseTwo = async (req, res) => {
    const data = []
    const all = await backend.getData()

    all.forEach(element => {
        if (element.data.filter[0].text == "Phase 2") {
            data.push(element)
        }
    });

    console.log(data);

    res.send(await view('card.html', { data })) 
}

const loadPhaseThree = async (req, res) => {
    const data = []
    const all = await backend.getData()

    all.forEach(element => {
        if (element.data.filter[0].text == "Phase 3") {
            data.push(element)
        }
    });

    console.log(data);

    res.send(await view('card.html', { data })) 
}

const loadPhaseFour = async (req, res) => {
    const data = []
    const all = await backend.getData()

    all.forEach(element => {
       if (element.data.filter[0].text == "Phase 4") {
           data.push(element)
       }
    });
    
    console.log(data);

    res.send(await view('card.html', { data })) //data fehlt
}

module.exports = {
    loadAllCards,
    loadPhaseOne,
    loadPhaseTwo,
    loadPhaseThree,
    loadPhaseFour
}