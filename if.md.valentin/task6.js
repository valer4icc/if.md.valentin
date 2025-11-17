function isMultipleOf(n, d) {

  if (d === 0) {
    return false;
  }
  return n % d === 0;
}

// Example usage
console.log(isMultipleOf(10, 5)); 
console.log(isMultipleOf(15, 3)); 
console.log(isMultipleOf(7, 2));  
console.log(isMultipleOf(0, 5));  