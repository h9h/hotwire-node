const accessToken = "MC5ZVHJyM0JNQUFDOEE0WUQ2.77-977-9PUhETnLvv73vv71177-977-977-977-9ayXvv70aZ--_ve-_ve-_vRXvv73vv73vv71bNu-_vU1_77-9"
const endpoint = "https://creativetools.prismic.io/api/v2"

const request = require("request")

const fullUrl = ""

const refData = (callback) => {
    request(endpoint, {json: true}, (err, res, body) => {
        if (err) {
            return callback(err)
        }

        return callback(body)
    })
}

const ref = refData(function(response){
    const myTest =  response.refs[0].ref;
    setURL(myTest)
})

function setURL(refCode){
    this.fullUrl = endpoint + "/documents/search?ref=" + refCode + "&access_token=" + accessToken
    console.log("full: " + this.fullUrl);
    return this.fullUrl
}



const prismicData = (callback) => {
    request(this.fullUrl, {json: true}, (err, res, body) => {
        if (err) {
            return callback(err)
        }

        return callback(body)
    })
} 

module.exports = {
    refData,
    prismicData,
    fullUrl,
    ref
}