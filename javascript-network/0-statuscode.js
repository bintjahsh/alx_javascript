const request = require('request');

url = process.argv[2]
request(url, function(error, response, body) {
    if (response) {
        console.log('code:',response.statusCode);
    }
})