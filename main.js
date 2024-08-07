function start() {
    let humanScore = 0;
    let computerScore = 0;
    let i=0;

    function getComputerChoice() {
        const choices = ["paper", "rock", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function play(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}.`);
            return;
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }

        console.log(`Human score: ${humanScore}, Computer score: ${computerScore}`);
    }

    for (i = 0; i < 5; i++) {
        const humanChoice = prompt("Enter your choice:");
        const computerChoice = getComputerChoice();
        play(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        console.log("You won!");
    } else if (computerScore > humanScore) {
        console.log("You lost!");
    } else {
        console.log("Draw!");
    }
}

// Start the game
start();
