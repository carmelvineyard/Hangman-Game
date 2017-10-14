
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

	//Global variables
	  	var wins = 0;
	  	var losses = 0;
	  	var lives = 9;
	  	var currentWord = "";
	  	var blanks = [];
	  	var wordCount = 0;
	  	

	//to put lives, wins, and losses into the stats div
			//At the last minute I realized this wasn't showing up. It was earlier in the night! *headdesk*
	  document.getElementById("stats").innerHTML = 
	  	"Lives:  " + lives + "      Wins:  " + wins + "     Losses: " + losses;

	//button click resets lives and picks new word
	  document.getElementById("button").onclick  = function() {reset()};

	  function reset() {
	  	var lives = 9;
	  	var wordCount = 0;
	  	var currentWord = wordList[Math.floor(Math.random() * 
	  		wordList.length)];
	  	
	  //as well as displaying the new word as underscores
    	document.getElementById("word").innerHTML = blanks;
    		for (var i = 0; i < currentWord.length; i++){
    			blanks.push("_");
    		}
		};
	//Good for testing purposes, works when there's not syntax errors.
	console.log(currentWord);
  	
	  	
	//onkeyup event named userGuess, makes input lower case:
		document.onkeyup = function(event) {
			var guessLetter = String.fromCharCode(event.keyCode).toLowerCase(); 

		//then starts the checkLetter loop.
			for (var i = 0; i < currentWord.length; i++) {
			  if (currentWord[i] === guessLetter) {
				currentWord[i].innerHTML = guessLetter;
				wordCount = ++;  //This is where the first syntax error pops up. I suspect there's a cascade of them.

					if wordCount === currentWord.length {
						alert("Congratulations! You Win!");
						document.getElementById("wrong").innerHTML = " ";
					}

				  else {
				  	var node = document.createElement("li");
				  	var textnode = document.createTextNode(guessLetter);
				  	node.appendChild(textnode);
					document.getElementById("wrong").appendChild(node);
					lives = --;
					  if lives === 0 {
						alert("Game Over!");
						document.getElementById("wrong").innerHTML = " ";
						losses = ++;
					  }
				  }
			  }
		}


	
	//}	 
	//  }
	