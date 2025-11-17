let num1 = parseInt(prompt(`Enter a number 1:`));
let num2 = parseInt(prompt(`Enter a number 2:`));
let num3 = parseInt(prompt(`Enter a number 3:`));

function specifySign(num1, num2, num3) {
  let product = num1 * num2 * num3;

  if (product > 0) {
    alert("The sign is +");
  } else if (product < 0) {
    alert("The sign is -");
  } else if(product == 0){
    alert("The product is zero.");
  } else {
    alert("Only number")
  }
}

console.log(specifySign(num1, num2, num3));
