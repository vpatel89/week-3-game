var wordbank = ['ghostbusters', 'inception', 'titanic', 'goodfellas', 'godzilla', 'gremlins', 'alien'];
var wins = 0;
var guesses = 10;
var word = wordbank[Math.floor(Math.random()*wordbank.length)];
var wrongL = []
var lines = []
var soundWin = new Audio("assets/audio/itemCatch.mp3");
var soundLose = new Audio("assets/audio/gameOver.mp3");

for (var i = 0; i < word.length; i++) {
	lines.push("_ ");
	console.log(lines);
}


document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess);
		console.log('word is ' + word);


	var letter = word.indexOf(userGuess);
	if (letter !== -1) {
		for (var i = 0; i < lines.length; i++) {
			if (word[i] === userGuess) {
		    	lines[i] = word[i];
			}
			console.log('it matches');
		}
	}else {
		console.log('DOES NOT MATCH');
		(guesses--);
		wrongL.push(userGuess);

	}

	if (guesses === 0) {
		soundLose.play();
		alert('Game Over');
		word = wordbank[Math.floor(Math.random()*wordbank.length)];
		guesses = 10;
		wrongL = [];
		lines = [];
		for (var i = 0; i < word.length; i++) {
			lines.push("_ ");
			console.log(lines);
		}
	}

	for (var i = 0; i < word.length; i++){
		if (lines.indexOf("_ ") == -1) {
			wins++;
			soundWin.play();
			alert('Good Job!');
			word = wordbank[Math.floor(Math.random()*wordbank.length)];
			guesses = 10;
			wrongL = [];
			lines = [];
			for (var i = 0; i < word.length; i++) {
				lines.push("_ ");
				console.log(lines);
			}
		}
	}


	var html = "<p>Theme: Movies</p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Current word: </p>" + lines +
	"<p>Number of guesses remaining: " + guesses + "</p>" +
	"<p>Letters already guessed: </p>" + wrongL;


	document.querySelector('#game').innerHTML = html;	
}