let num1 = parseInt(prompt(`Enter a number:`));
let num2 = parseInt(prompt(`Enter a number:`));

function compareNumbersIf(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is larger than ${num2}`);
  } else if (num2 > num1) {
    console.log(`${num2} is larger than ${num1}`);
  } else {
    console.log(`${num1} and ${num2} are equal`);
  }
}

compareNumbersIf(num1, num2);

