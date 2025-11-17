function rockPaperScissors(player1, player2) {
  player1 = player1.toLowerCase();
  player2 = player2.toLowerCase();

  if (player1 === player2) {
    return "draw";
  }

  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "scissors" && player2 === "paper") ||
    (player1 === "paper" && player2 === "rock")
  ) {
    return "player 1";
  } else {
    return "player 2";
  }
}

console.log(rockPaperScissors("rock", "paper"));
