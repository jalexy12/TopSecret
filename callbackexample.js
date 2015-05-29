var fs = require('fs');
var doneReading = require('./done-reading')


fs.readFile("file.txt", 'utf8', doneReading);
