// ! Leap Year Checker
// Check if the year is divisible by 4
// If it is divisible by 100, it must also be divisible by 400 to be a leap year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

console.log(isLeapYear(2020)); // true
