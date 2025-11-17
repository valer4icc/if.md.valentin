function favoriteNumber(fav, guess) {
  if (fav > guess) {
    return "Too low";
  } else if (fav < guess) {
    return "Too high";
  } else {
    return "You got it!";
  }
}

console.log(favoriteNumber(5, 6));
