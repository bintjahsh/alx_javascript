const request = require('request')

const id = process.argv[2]
const url = `https://swapi-api.alx-tools.com/api/films/${id}`

request(url, function(error, response, body) {
    if (response) {
        const responseJSON = JSON.parse(response.body);
        console.log(responseJSON.title);
    }
})