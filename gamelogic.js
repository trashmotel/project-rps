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