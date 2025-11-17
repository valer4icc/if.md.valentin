function isValidTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidTriangle(3, 4, 5));
console.log(isValidTriangle(1, 2, 3));
console.log(isValidTriangle(7, 10, 5));
console.log(isValidTriangle(2, 4, 5));
