const fs = require('fs').promises;
const request = require('request')

const url = process.argv[2]
const path = process.argv[3]

request(url, function(error, response, body) {
    if (response) {
        const responseBody = response.body
        fs.writeFile(path, responseBody)
    }
});