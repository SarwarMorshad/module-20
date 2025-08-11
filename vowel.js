//  ! Count Vowels in string
function countVowels(str) {
  var vowels = "aeiouAEIOU";
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }

  return count;
}

var inputString = "Hello World";
console.log('Number of vowels in "' + inputString + '":', countVowels(inputString));
