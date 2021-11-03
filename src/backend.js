const accessToken = "MC5ZVHJyM0JNQUFDOEE0WUQ2.77-977-9PUhETnLvv73vv71177-977-977-977-9ayXvv70aZ--_ve-_ve-_vRXvv73vv73vv71bNu-_vU1_77-9"
const endpoint = "https://creativetools.prismic.io/api/v2"

const request = require("request")
const test = require("./methods")

async function getRef() {
    request(endpoint, { json: true }, (err, res, body) => {
        if (err) {
            console.log(err);
        }

        myRef = body.refs[0].ref;

        getData(myRef)
    })
}

/* const refData = (callback) => {
    request(endpoint, { json: true }, (err, res, body) => {
        if (err) {
            return callback(err)
        }

        return callback(body)
    })
} */

/* const ref = refData(function (response) {
    const myTest = response.refs[0].ref;
    setURL(myTest)
}) */

async function getData(ref) {
    const myUrl = endpoint + "/documents/search?ref=" + ref + "&access_token=" + accessToken

    request(myUrl, { json: true }, (err, res, body) =>{
        const rawData = body.results
        
        console.log(rawData)

        var data = []

        for (let index = 0; index < rawData.length; index++) {
            const element = rawData[index];

            data.push(element)

            
        } 

        data.forEach(element => {
            console.log(element.id);
        });

        test.test(data)

        
    })
}



const prismicData = (callback) => {
    request(this.fullUrl, { json: true }, (err, res, body) => {
        if (err) {
            return callback(err)
        }

        return callback(body)
    })
}

module.exports = {
    getRef,
    getData
}