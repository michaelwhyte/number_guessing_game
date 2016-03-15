// JavaScript Document

// Global game variables
var ranNum = genRanNum();
console.log(ranNum);
var numberInput = document.getElementById('number_input');
var btnEnterGuess = document.getElementById('btn_enter_guess');
var messageOutput = document.getElementById('message_output');
var counterGuess = 0;
var gameFinished = false;

// Click handler
btnEnterGuess.onclick = function(){
	
	if(gameFinished === false){
		checkGuess();
	}else{
		messageOutput.innerHTML = 'Game finished, refresh the page to play again';	
	}
};

// Game Functions

// Generate random number between 1 and 100
function genRanNum(){
	var randomNumber = Math.floor(Math.random() * 100) + 1;
	return randomNumber;	
} // end genRanNum function

// Check the Guess function
function checkGuess(){
	counterGuess++;
	var numIsValid = false;
	//console.log(counterGuess);
	
	// get value from the input element
	var guessedNum = numberInput.value;
	console.log(guessedNum);
	
	// test if value entered is valid
	if(!isNumeric(guessedNum)){
		messageOutput.innerHTML = 'Not a number...please enter a valid number';
	}else if(guessedNum < 1 || guessedNum > 100){
		messageOutput.innerHTML = 'Please enter a number between 1 and 100';
	}else{
		numIsValid = true;	
	}
	
	// Check Guess against random number
	if(numIsValid === true){
	  if(guessedNum > ranNum){
		  messageOutput.innerHTML = 'To high, try a lower number';
	  }else if(guessedNum < ranNum){
		  messageOutput.innerHTML = 'To low, try a higher number';	
	  }else{
		  correctGuess(counterGuess);		
	  }
	} 
} // end checkGuess function

// Check if value is a number 
//
// Note: Works for the purpose of this app...may not be 
//       suitable for other applications...
//
// Solution for this from this StackOverflow answer:
//
// http://stackoverflow.com/a/5778071
//
function isNumeric(val) {
	return !isNaN(parseFloat(val)) && isFinite(val);
}

// Game Finished function
function correctGuess(numberOfGuesses){
	gameFinished = true;
	
	if(numberOfGuesses === 1){
		messageOutput.innerHTML = 'Wow mind reader, you guessed correctly on your first guess';
	}else if(numberOfGuesses <= 5){
		messageOutput.innerHTML = 'Not bad it took you only ' + numberOfGuesses + ' guesses to guess the correct number';
	}else{
		messageOutput.innerHTML = 'You guessed correctly. It took you ' + numberOfGuesses + ' guesses to guess the correct number';
	}			
} // end gameFinished function
