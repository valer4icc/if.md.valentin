function daysInMonthByNumber(monthNum) {
  if (!Number.isInteger(monthNum) || monthNum < 1 || monthNum > 12) {
    throw new Error(`Expected a month number from 1-12, received: ${monthNum}`);
  }

   return new Date(2025, monthNum, 0).getDate();
}

console.log(daysInMonthByNumber(9))