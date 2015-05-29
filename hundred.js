var fs = require('fs');

function hundred(){
	for  (i = 1; i <= 100; i++){
	  if (i === 100){
	  	fs.appendFile('file.txt', i, function (err) {
	  		if (err){
	  			console.log(err)
	  		}
	  	});

	  }else{
		fs.appendFile('file.txt', i + "\n", function (err) {
			if (err){
				console.log(err)
			}
		});
	  }
	}
}
hundred();