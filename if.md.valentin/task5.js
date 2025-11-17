function checkIsArmstrong(number) {
  const numStr = String(number);
  const numberOfDigits = numStr.length;
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);
    sum += Math.pow(digit, numberOfDigits);
  }

  if (sum === number) {
    return true;
  } else {
    return false;
  }
}
console.log(checkIsArmstrong(153));
