let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors:");
    return humanChoice.toLowerCase();
}

console.log(getHumanChoice());