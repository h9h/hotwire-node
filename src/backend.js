const accessToken = "MC5ZVHJyM0JNQUFDOEE0WUQ2.77-977-9PUhETnLvv73vv71177-977-977-977-9ayXvv70aZ--_ve-_ve-_vRXvv73vv73vv71bNu-_vU1_77-9"
const endpoint = "https://creativetools.prismic.io/api/v2"

const fetch = require("node-fetch")

async function getRef() {
    const response = await fetch(endpoint).then((res) => res.json())

    /* console.log(response.refs[0].ref); */

    return response.refs[0].ref
}

async function getData() {
    const ref = await getRef()

    const myUrl = endpoint + "/documents/search?ref=" + ref + "&access_token=" + accessToken

    /* console.log(myUrl); */


    const data = await fetch(myUrl).then((res) => res.json())

    /* console.log(data.results); */

    return data.results    
}

module.exports = {
    getRef,
    getData
}