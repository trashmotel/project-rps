let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.random();
    //use If Else statements to return rock, paper, or scissors
    if (x < 0.4) {
        return 'rock';
    } else if (x < 0.7) {
        return 'paper';
    } else {
        return 'scissors';
    }
    //use Math.random to generate a number which will determine the string returned

}

function getHumanChoice() {
    //use prompt to get the human choice
    let choice = prompt("Please type 'rock' 'paper' or 'scissors'");
    switch (choice.toLowerCase()) {
        case "rock":
            return 'rock';
            break;
        case "paper":
            return 'paper';
            break;
        case "scissors":
            return 'scissors';
            break;
        default:
            alert('Please check your spelling and try again');
    }

}

function playRound(humanChoice,computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win! Rock beats scissors.');
        humanScore++;
    }else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('Comptuter wins! Paper beats rock.');
        computerScore++;
    }else if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log('You win! Paper beats rock.');
        humanScore++;
    }else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log('Computer wins! Scissors beats paper.');
        computerScore++;
    }else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log('You win! Scissors beats paper.');
        humanScore++;
    }else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log('Computer wins! Rock beats scissors.');
        computerScore++;
    }else {
        console.log('Tie!');
    }
}

function playGame() {
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`You: ${humanScore}    Computer: ${computerScore}`);
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`You: ${humanScore}    Computer: ${computerScore}`);
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`You: ${humanScore}    Computer: ${computerScore}`);
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`You: ${humanScore}    Computer: ${computerScore}`);
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`You: ${humanScore}    Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log('You win!');
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
   }else if (humanScore < computerScore) {
        console.log('Computer wins!');
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
   }else {
        console.log('Tie!');
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
   }
}