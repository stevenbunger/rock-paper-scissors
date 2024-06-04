const choices = ["rock", "paper", "scissors"];


function getHumanChoice () {
    let humanInputChoice = prompt("Enter your Choice (rock, paper or scissors): ");
    return humanInputChoice;
};




function getComputerChoice () {
    const randomChoice = Math.floor(Math.random() * choices.length);
    const randomElement = choices[randomChoice];
    return randomElement;
};    


function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    const maxRounds = 5;

    function playRound(humanSelection, computerSelection) {


            const outcome = {
                rock: {rock: "It's a tie!", paper: "You lose! Paper beats rock!", scissors: "You win! rock beats scissors"},
                paper: {rock: "You win! paper beats rock!", paper: "It's a tie!!", scissors: "You lose! scissors beats paper"},
                scissors: {rock: "You lose! Rock beats scissors", paper: "You win! Scissors beat paper", scissors: "It's a tie!"}
            };

            const outcomeMessage = outcome[humanSelection] && outcome[humanSelection][computerSelection];

            const result = {
                message: outcomeMessage || "Invalid Selection",
                winner: ""
            }


            if (outcomeMessage) {
                if (outcomeMessage.includes("win")) { 
                    result.winner = "human";
                } else if (outcomeMessage.includes("lose")) {
                    result.winner = "computer";
                };

                return result;

            };
        };

        while (roundsPlayed < maxRounds) {

            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();


            const roundResult = playRound(humanSelection, computerSelection);
            roundsPlayed++;

            console.log(roundResult.message);

            if (roundResult.winner == "human") {
                humanScore++;
            } else if (roundResult.winner == "computer") {
                computerScore++;
            }
        
        };
        return {
            humanScore,
            computerScore,
            roundsPlayed
        };
};


const gameResults = playGame();

console.log("Final Score: ");
console.log("Human Score: ", gameResults.humanScore);
console.log("Computer Score: ", gameResults.computerScore);
console.log("Total rounds played: ", gameResults.roundsPlayed);