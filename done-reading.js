var fizzBuzzIt = require('./fizzbuzzer.js')

function doneReading(err, fileContents){
	var fileLines = fileContents.split('\n');
	var count = fileLines.length;
	console.log("The number of lines in the file is: ", count)
	fizzBuzzIt(fileLines)
};

module.exports = doneReading;