const request = require('request');
const fs = require("fs");
const hostname = 'https://jsonplaceholder.typicode.com/todos';

request(`${hostname}`, (err, res, body) => {
    fs.appendFile('data.json', body, function (err) {
        if (err) throw err;
        console.log('Arquivo salvo!');
    });
});
