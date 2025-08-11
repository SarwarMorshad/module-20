// ! Average of even numbers in an array
function evenAverage(arr) {
  let sum = 0;
  let count = 0;
  for (let even of arr) {
    if (even % 2 === 0) {
      sum += even;
      count++;
    }
  }
  if (count === 0) {
    return "No Even number found"; // No even numbers found
  }
  return sum / count; // Return the average of even numbers
}

const numbers = [2, 4, 6, 1, 3, 5, 7, 8, 9, 10];
console.log(evenAverage(numbers)); // Output the average of even numbers
