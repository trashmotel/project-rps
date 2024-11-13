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
    switch (choice) {
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