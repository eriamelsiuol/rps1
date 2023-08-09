

let winCount = 0;
let lossCount = 0;
let drawCount = 0;

document.getElementById("rockSelect").addEventListener("click", function () {
	let pChoice = "rock";
	console.log(pChoice);
	playRound(pChoice,getComputerChoice());
	gameState();
});

document.getElementById("paperSelect").addEventListener("click", function () {
	let pChoice = "paper";
	console.log(pChoice);
	playRound(pChoice,getComputerChoice());
	gameState();

});

document.getElementById("scissorsSelect").addEventListener("click", function () {
	let pChoice = "scissors";
	console.log(pChoice);
	playRound(pChoice,getComputerChoice());
	gameState();

});

function getComputerChoice() {
	const choices = ["🪨", "📜", "✂️"];
	let cChoice = choices[Math.floor(Math.random() * choices.length)];
	document.getElementById("compChoice").innerHTML = cChoice;
	return cChoice;
}
//comments here
function playRound(playerSelection, computerSelection) {
	console.log("Comp choice is " + computerSelection);
	//switch on player selectionfirst, that way we can figure out if input error
	switch (playerSelection) {
		case "paper":
			//swtich on computer's choice
			document.getElementById("humanChoice").innerHTML = "📜";
			switch (computerSelection) {
				case "📜":
					drawCount++;
					break;
				case "🪨":
					winCount++;
					break;
				case "✂️":
					lossCount++;
					break;

			}
			break;

		case "rock":
			document.getElementById("humanChoice").innerHTML = "🪨";
			switch (computerSelection) {
				case "🪨":
					drawCount++;
					break;
				case "✂️":
					winCount++;
					break;
				case "📜":
					lossCount++;
					break;
			}
			break;

		case "scissors":
			document.getElementById("humanChoice").innerHTML = "✂️";
			switch (computerSelection) {
				case "✂️":
					drawCount++;
					break;
				case "📜":
					winCount++;
					break;
				case "🪨":
					lossCount++;
					break;
			}
			break;

		default:
			resultOutput = "Input error";
			break;
	}
	return;
}


function gameState() {
	//update the DOM with the current game state
	
	document.getElementById("roundCounter").innerHTML = "Round " + (winCount + lossCount + drawCount);
	document.getElementById("humanScore").innerHTML = "🧑 score: " + (winCount);
	document.getElementById("compScore").innerHTML = "🤖 Score: " + (lossCount);
	document.getElementById("numDraws").innerHTML = "Draws: " + (drawCount);

	//check for win or loss
	if (winCount == 5) {
		alert(`Congrats! You win, score was: ${winCount} to ${lossCount}!`);
		resetGame();
	}
	else if (lossCount == 5) {
		alert(`Sorry! You lost, score was: ${winCount} to ${lossCount}!`);
		resetGame();
	}
	
	// reset the game if it is over


}

function resetGame() {
	location.reload();

}

/*
function playGame() {

	//if either losses or wins gets to 5, then it breaks the loop
	while (lossCount < 5 && winCount < 5) {
		const playerSelection = getPlayerChoice();
		const computerSelection = getComputerChoice();
		console.log(computerSelection);
		console.log(playRound(playerSelection, computerSelection));
		console.log("Wins: " + winCount + " Losses: " + lossCount);
	}

	console.log("Game over, score was: " + winCount + " wins and " + lossCount + " losses, thanks for playing.");

}
playGame();
*/