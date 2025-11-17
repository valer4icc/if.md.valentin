const johnScores = [89, 120, 103];
const mikeScores = [116, 94, 123];
const maryScores = [97, 134, 105];

function calculateAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

function determineWinner(team1Name, team1Scores, team2Name, team2Scores) {
  const team1Average = calculateAverage(team1Scores);
  const team2Average = calculateAverage(team2Scores);

  console.log(`${team1Name} Average: ${team1Average}`);
  console.log(`${team2Name} Average: ${team2Average}`);

  if (team1Average > team2Average) {
    console.log(`${team1Name} wins with an average score of ${team1Average}!`);
  } else if (team2Average > team1Average) {
    console.log(`${team2Name} wins with an average score of ${team2Average}!`);
  } else {
    console.log("It's a draw!");
  }
}

console.log("--- John vs Mike ---");
determineWinner("John's team", johnScores, "Mike's team", mikeScores);
console.log("\n");

function determineWinner3Teams(
  team1Name,
  team1Scores,
  team2Name,
  team2Scores,
  team3Name,
  team3Scores
) {
  const team1Average = calculateAverage(team1Scores);
  const team2Average = calculateAverage(team2Scores);
  const team3Average = calculateAverage(team3Scores);

  console.log(`${team1Name} Average: ${team1Average}`);
  console.log(`${team2Name} Average: ${team2Average}`);
  console.log(`${team3Name} Average: ${team3Average}`);

  if (team1Average > team2Average && team1Average > team3Average) {
    console.log(`${team1Name} wins with an average score of ${team1Average}!`);
  } else if (team2Average > team1Average && team2Average > team3Average) {
    console.log(`${team2Name} wins with an average score of ${team2Average}!`);
  } else if (team3Average > team1Average && team3Average > team2Average) {
    console.log(`${team3Name} wins with an average score of ${team3Average}!`);
  } else {
    console.log("It's a draw!");
  }
}

console.log("--- John vs Mike vs Mary ---");
determineWinner3Teams(
  "John's team",
  johnScores,
  "Mike's team",
  mikeScores,
  "Mary's team",
  maryScores
);
console.log("\n");

console.log("--- Changing scores for a new winner ---");
const mikeScoresNew = [150, 120, 140];
determineWinner("John's team", johnScores, "Mike's team", mikeScoresNew);
console.log("\n");

console.log("--- Changing scores for a new winner ---");
const maryScoresNew = [130, 150, 160];
determineWinner3Teams(
  "John's team",
  johnScores,
  "Mike's team",
  mikeScores,
  "Mary's team",
  maryScoresNew
);
