// ! Average of odd numbers from array
function oddAverage(arr) {
  let sum = 0;
  let count = 0;
  for (odd of arr) {
    if (odd % 2 !== 0) {
      sum += odd;
      count++;
    }
  }
  if (count === 0) {
    return "No Odd number found"; // No odd numbers found
  }
  return sum;
}

const numbers = [2, 4, 6, 1, 3, 5, 7, 8, 9, 10];
console.log(oddAverage(numbers));
