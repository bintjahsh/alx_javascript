const request = require('request')

const url = process.argv[2]
const id = "https://swapi-api.alx-tools.com/api/people/18/"

request(url, function(error, response, body) {
    if (response) {
        const responseJSON = JSON.parse(response.body);
        count = 0
        const results = responseJSON.results
        results.forEach(film => {
            const wedgeAntilles = film.characters.filter((character) => character == id)
            count += wedgeAntilles.length
        });
        
        console.log(count);
    }
})