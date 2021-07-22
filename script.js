var fs = require('fs');

var data = fs.readFileSync('data.txt', 'utf-8');

document.getElementById('mytext').value = data