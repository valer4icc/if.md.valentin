function tipAmount(num, str) {
  let amount = 0;

  if (str == "good") {
    amount = 20
return num / 100 * amount
  } else if (str == "fair") {
    amount = 15
return num / 100 * amount
  } else if (str == "poor") {
    amount = 10
return num / 100 * amount
  } else {
    return "mot corect"
  }
}

console.log(tipAmount(30, "poor"))