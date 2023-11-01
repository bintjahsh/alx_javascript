const request = require('request')

const id = process.argv[2]
const url = `https://swapi-api.alx-tools.com/api/films/${id}/`

request(url, function(error, response, body) {
    if (response) {
        const responseJSON = JSON.parse(body);
        const actors = responseJSON.characters;
        for (let i = 0; i < actors.length; i++) {
            if (actors[i]) {
                request(actors[i], function(error, response, body) {
                    if (response) {
                        const responseCharacter = JSON.parse(body)
                        console.log(responseCharacter.name)
                    }
                });
            }
        }   
    }
})