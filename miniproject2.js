let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  //console.log("game was draw");
  msg.innerText = "Game was draw. Play agin.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    //console.log("You win!");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`; // ${} only works with backticks, not with single quotes ' ' or double quotes " ".
    msg.style.backgroundColor = "green";
  } else {
    //console.log("You lose");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`; // ${} only works with backticks, not with single quotes ' ' or double quotes " ".
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //console.log("user choice =", userChoice);
  // Next step, generate compChoice.
  const compChoice = genCompChoice();
  //console.log("comp choice =", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper = options for compChoice
      userWin = compChoice === "paper" ? false : true; // ternory operator
    } else if (userChoice === "paper") {
      //rock, scissors = options for compChoice
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // remaining one by default is userChoice=== "scissors";
      // rock, paper = options for compChoice
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
