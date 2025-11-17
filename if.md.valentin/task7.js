function sortNumbers(num1, num2, num3, num4) {
  const numbers = [num1, num2, num3, num4];

  numbers.sort(function (a, b) {
    return b - a;
  });

  alert("Sorted numbers (descending): " + numbers.join(", "));
}

sortNumbers(-6, 1, 8, 4);
