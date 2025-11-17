function isLandscape(width, height) {
  if (width > height) {
    return true;
  } else {
    return false;
  }
}

function compareNumbers(num1, num2) {
  return num1 > num2 ? num1 : num2 > num1 ? num2 : "ligus";
}
console.log(compareNumbers(2, 1));
console.log(compareNumbers(1, 2));
console.log(compareNumbers(1, 1));
