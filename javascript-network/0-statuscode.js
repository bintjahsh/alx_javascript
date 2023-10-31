const request = require('request');

url = argv[1]
request(url, function(response) {
    console.log('code:', response.statusCode);
})