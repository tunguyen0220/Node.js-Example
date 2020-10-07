var express = require('express');
var path = require('path');


var compliments = [
    'You look nice today!',
    'That dress looks nice on you!',
    'You are really smart!',
    'I am really proud of you!',
    'You have learned a lot of things. Congratulations!'
];


function getRandomCompliment() {
    var randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
}

var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/compliment', function(req, res) {
    res
        .json({
            compliment: getRandomCompliment()
        })
        .end();
});

app.use('/public', express.static('./public'));

app.listen(8080);
console.log('Listening on http://localhost:8080');