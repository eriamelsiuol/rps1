

let winCount = 0;
let lossCount = 0;

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random()*choices.length)];
}
//comments here
function playRound(playerSelection, computerSelection) {
	console.log("Comp choice is " + computerSelection);
	//switch on player selectionfirst, that way we can figure out if input error
	switch (playerSelection) {
		case "paper":
			//swtich on computer's choice
			switch (computerSelection) {
				case "paper":
					resultOutput = "That was a tie!";
					break;
				case "rock":
					resultOutput = "You win! " + playerSelection + " beats " + computerSelection + "!";
					winCount++;
					break;
				case "scissors":
					resultOutput = "You lose! " + playerSelection + " loses to " + computerSelection + "!";
					lossCount++;
					break;

			}
			break;

		case "rock":
			switch (computerSelection) {
				case "rock":
					resultOutput = "That was a tie!";
					break;
				case "scissors":
					resultOutput = "You win! " + playerSelection + " beats " + computerSelection + "!";
					winCount++;
					break;
				case "paper":
					resultOutput = "You lose! " + playerSelection + " loses to " + computerSelection + "!";
					lossCount++;
					break;
			}
		break;

		case "scissors":
			switch (computerSelection) {
				case "scissors":
					resultOutput = "That was a tie!";
					break;
				case "paper":
					resultOutput = "You win! " + playerSelection + " beats " + computerSelection + "!";
					winCount++;
					break;
				case "rock":
					resultOutput = "You lose! " + playerSelection + " loses to " + computerSelection + "!";
					lossCount++;
					break;
			}
		break;

		default:
			resultOutput = "Input error";
			break;
	}
	return resultOutput;
}

function getPlayerChoice() {
	pChoice = prompt("Select rock, paper, or scissors.");
	pChoice = pChoice.toLowerCase();
	//allows for shorthand
	switch(pChoice) {
		case "r":
			pChoice = "rock";
			break;
		case "p":
			pChoice = "paper";
			break;
		case "s":
			pChoice = "scissors";
			break;
	}
	return pChoice;
}

function playGame() {

	//if either losses or wins gets to 5, then it breaks the loop
	while(lossCount < 5 && winCount < 5) {
		const playerSelection = getPlayerChoice();
		const computerSelection = getComputerChoice();
		console.log(computerSelection);
		console.log(playRound(playerSelection, computerSelection));
		console.log("Wins: " + winCount + " Losses: " + lossCount);
	}

	console.log("Game over, score was: " + winCount + " wins and " + lossCount + " losses, thanks for playing.");

}
playGame();