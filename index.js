const CHOICES = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};
let humanScore = 0;
let computerScore = 0;

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

function playGame(humanChoice) {
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

  let humanSelection;
  humanChoice
    ? (humanSelection = humanChoice)
    : (humanSelection = getHumanChoice());
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  updateScores();
}

const buttons = document.querySelectorAll("button");
for (const button of buttons) {
  button.addEventListener("click", (event) => {
    console.log(event.target.textContent);
    switch (true) {
      case event.target.textContent.toLowerCase() === "rock":
        playGame(CHOICES.rock);
        break;
      case event.target.textContent.toLowerCase() === "paper":
        playGame(CHOICES.paper);
        break;
      case event.target.textContent.toLowerCase() === "scissors":
        playGame(CHOICES.scissors);
        break;
      default:
        console.error("Failed to start click event");
    }
  });
}

function updateScores() {
  const resultsList = document.querySelector(".results");
  const scoresItems = resultsList.querySelectorAll("li");
  for (const scoreItem of scoresItems) {
    const span = scoreItem.firstElementChild;
    if (scoreItem.textContent.trim().toLowerCase().includes("human")) {
      span.textContent = humanScore.toString();
    } else if (
      scoreItem.textContent.trim().toLowerCase().includes("computer")
    ) {
      span.textContent = computerScore.toString();
    }
  }

  if (computerScore >= 5 || humanScore >= 5) {
    const winner = computerScore >= 5 ? "The computer" : "You";
    const winText = document.createElement("h2");
    winText.textContent = `${winner} won!`;
    resultsList.appendChild(winText);
  }
}
