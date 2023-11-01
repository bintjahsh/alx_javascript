const request = require('request')

const url = process.argv[2]

request(url, function(error, response, body) {
    if (response) {
        // create an empty set that will contain the key:value pair of userId and number tasks completed
        const usersList = {};
        const responseBody = JSON.parse(body);
        for (let i = 0; i < responseBody.length; i++) {
            // loop through every item in the responseBody
            const task = responseBody[i];
            if (task.completed === true) {
                // check each user instance if task is completed
                if (usersList[task.userId] === undefined) {
                    // check the userId of the completed task, if it doesnt exist, create it
                    usersList[task.userId] = 0;
                }
                // if userId exists and task is completed, increment the number of completed tasks by 1
                usersList[task.userId]++;
            }
        }
        console.log(usersList)
    }
});