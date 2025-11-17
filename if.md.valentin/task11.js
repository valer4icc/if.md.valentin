function checkLock(a, b, c, d) {
  const numbers = [a, b, c, d]


  if (numbers[0] = 3 || numbers[0] == 5 || numbers[0] == 7) {
    if (numbers[1] == 2) {
      if (5 >= numbers[2] <= 100) {
        if (20 < numbers[2] || 9 > numbers[2]) {
          return "correct"
        } else{
          return" incorrect because the fourth number is between 9 and 20"
        }
      }else{
        return" incorrect because the third number is between 5 and 100"
      }
    }else{
      return "'incorrect' because the second number isn't a 2"
    }
  } else{
    return "'incorrect' because the first number isn't a 3, 5, or 7"
  }

}

console.log(checkLock(5, 2, 45, 1));
console.log(checkLock(1, 2, 45, 1));
console.log(checkLock(5, 2, 45, 10));