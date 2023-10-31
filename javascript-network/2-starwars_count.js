const request = require('request')

const url = process.argv[2]
const id = "18"

request(url, function(error, response, body) {
    let count = 0
    if (response) {
        const responseJSON = JSON.parse(response.body);
        const results = responseJSON.results
        results.forEach(film => {
            const wedgeAntilles = film.characters.filter((character) => character.includes(id))
            count += wedgeAntilles.length
        });
    }
    console.log(count);
});