// ! Remove duplicates from an array
// ! Logic:
// **unique.includes(item) or unique.includes(item) === false

function noDuplicate(arr) {
  const unique = [];
  for (item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
}

const numbers = [1, 2, 3, 4, 5, 1, 2, 3];
const friends = ["Alice", "Bob", "Alice", "Charlie", "Bob", "David"];
console.log(noDuplicate(numbers));
console.log(noDuplicate(friends));
