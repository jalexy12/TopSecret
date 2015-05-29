function fizzBuzzIt(array){
  array.forEach(function(line){
  	if (line % 15 === 0){
  	    fizzBuzz()
  	}else if (line % 5 === 0){
  		buzz()
  	}else if (line % 3 === 0){
  		fizz()
  	}else{
  		other(line)
  	}
  })
}

function fizz(){
	console.log("Fizz")
}

function buzz(){
	console.log('Buzz')
}

function fizzBuzz(){
	console.log("Fizz Buzz")
}

function other(num){
	console.log(num)
}

module.exports = fizzBuzzIt;