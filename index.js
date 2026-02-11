const CHOICES = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

function getComputerChoice() {
  const randomNumber = Math.random();
  switch (true) {
    case randomNumber <= 0.33333333333:
      return CHOICES.rock;
    case randomNumber <= 0.66666666666:
      return CHOICES.paper;
    case randomNumber <= 1:
      return CHOICES.scissors;
    default:
      return -1;
  }
}
// console.log(getComputerChoice());

function getHumanChoice() {
  const response = prompt("Rock, paper, or scissors?");
  switch (true) {
    case response.toLowerCase() === "rock":
      return CHOICES.rock;
    case response.toLowerCase() === "paper":
      return CHOICES.paper;
    case response.toLowerCase() === "scissors":
      return CHOICES.scissors;
    default:
      return -1;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Tie");
    } else if (
      humanChoice === CHOICES.rock &&
      computerChoice === CHOICES.paper
    ) {
      console.log("You lose! Paper beats rock.");
      ++computerScore;
    } else if (
      humanChoice === CHOICES.rock &&
      computerChoice === CHOICES.scissors
    ) {
      console.log("You win! Rock beats scissors.");
      ++humanScore;
    } else if (
      humanChoice === CHOICES.paper &&
      computerChoice === CHOICES.rock
    ) {
      console.log("You win! Paper beats rock.");
      ++humanScore;
    } else if (
      humanChoice === CHOICES.paper &&
      computerChoice === CHOICES.scissors
    ) {
      console.log("You lose! Scissors beats paper.");
      ++computerScore;
    } else if (
      humanChoice === CHOICES.scissors &&
      computerChoice === CHOICES.rock
    ) {
      console.log("You lose! Rock beats scissors.");
      ++computerScore;
    } else if (
      humanChoice === CHOICES.scissors &&
      computerChoice === CHOICES.paper
    ) {
      console.log("You win! Scissors beats paper.");
      ++humanScore;
    }
  }

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log(`Human: ${humanScore}`);
  console.log(`Computer: ${computerScore}`);
}

playGame();
