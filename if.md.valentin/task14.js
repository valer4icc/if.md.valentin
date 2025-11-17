
function isEven(num) {
 
  if (!Number.isInteger(num)) {
    return false;
  }

  return num % 2 === 0;
}


function isOdd(num) {

  if (!Number.isInteger(num)) {
    return false;
  }

  return num % 2 !== 0;
}


console.log(isEven(3.14))