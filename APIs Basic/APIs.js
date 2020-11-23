const request = require('request');
request('http://www.omdbapi.com/?apikey=e9a391dc&s=wolverine', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    let data = JSON.parse(body)
    console.log('body:', data); // Print the HTML for the Google homepage.
});
