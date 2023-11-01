const request = require('request')

const url = process.argv[2]

request(url, function(error, response, body) {
    if (response) {
        const usersList = {};
        const responseBody = JSON.parse(body);
        for (let i = 0; i < responseBody.length; i++) {
            if (responseBody[i].completed === true) {
                if (usersList[responseBody[i].userId] === undefined) {
                    usersList[responseBody[i].userId] = 0;
                }
                usersList[responseBody[i].userId]++;
            }
        }
        console.log(usersList)
    }
});