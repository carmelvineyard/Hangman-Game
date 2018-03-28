
	  //Object holds the words available for use as currentWord:
		var wordList = [
		  "monopoly",
		  "mousetrap",
		  "candyland",
		  "smallworld",
		  "diplomacy",
		  "munchkin",
		  "clue",
		  "risk",
		  "coup",
		  "hive"
		];

	//global variables
		var wins = 0;
	  	var losses = 0;
	  	var guessCount = 0;
	  	var guessesLeft = 9;
	  	var currentWord = "";
	  	var blanks = [];  //same as lettersInChosenWord, should break currentWord into an array and store them.
	  	var wordCount = 0;  
	  	var wrongGuesses = [];
	  	var blanksAndSuccesses = [];



 function reset() {
	  	guessCount = 9;
	  	currentWord = wordList[Math.floor(Math.random() * wordList.length)];
	  	blanks = currentWord.split("");
	  	wordCount = currentWord.length;
	  	console.log(currentWord);
	  	blanksAndSuccesses = [];
	  	wrongGuesses = [];

	  // displays the new word as underscores
    	for (var i = 0; i < wordCount; i++){
    			blanksAndSuccesses.push("_");
    	}
    	console.log(blanksAndSuccesses);
    	
    	$("#guess-stat").html(guessCount);
    	
    	$("#word").html(blanksAndSuccesses.join(" "));
    	
    	$("#wrong").html(wrongGuesses.join(" "));
    	
    	$("#guess-stat").text("Guesses: " + guessCount);
 };
	
	
  	
	  function checkLetter(guessLetter) {
	  	var letterInWord = false;              
	  	for (var i = 0; i < wordCount; i++) {
	  		if (currentWord[i] === guessLetter) {
	  			letterInWord = true;
	  		}
	  	}
	  	if (letterInWord) {
	  		for (var j = 0; j < wordCount; j++) {
	  			if (currentWord[j] === guessLetter) {
	  				blanksAndSuccesses[j] = guessLetter;
	  			}
	  		}
	  	console.log(blanksAndSuccesses);
	  	}
	  	else {
	  		wrongGuesses.push(guessLetter);
	  		guessCount--;
	  	}
	  	
		//to put lives, wins, and losses into the stats div	
	  $("#guess-stat").html("Guesses:  " + guessCount);
	  
	  $("#wins-stat").html("Wins: " + wins);
	  $("#losses-stat").html("Losses " + losses); 

	  }  	

	  function roundComplete() {
	  	console.log("Guesses: " + guessCount);
	  	$("#guess-stat").html("Guesses: " + guessCount);
	  	$("#word").html(blanksAndSuccesses.join(" "));
	  	$("#wrong").html(wrongGuesses.join(" "));

	  	if (blanks.toString() === blanksAndSuccesses.toString()) {
	  		wins++;
	  		alert("Congratulations! You Win!");
	  		$("#wins-stat").html("Wins: " + wins);
	  	}
	  	else if (guessCount === 0) {
	  		losses++;
	  		alert("The hangman has perished!");
	  		$("#losses-stat").html("Losses: " + losses);
	  	}

	  }

//============Function calls=================

	//button click resets lives and picks new word
		$("#button").on("click", function() {
			reset();
		});
	 

	//onkeyup event named userGuess, makes input lower case:
		document.onkeyup = function(event) {
			var guessLetter = String.fromCharCode(event.keyCode).toLowerCase(); 
			console.log(guessLetter);
			checkLetter(guessLetter);
			roundComplete();
		}	 

