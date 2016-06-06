// Find all distinct palindromic sub-strings of a given string
// Input: str = "abaaa"
// Output:  Below are 5 palindrome sub-strings
// a
// aa
// aaa
// aba
// b

function palindromeSubstrings (str) {
  if (typeof str !== 'string') return null;
  var dictionary = {};
  for (var i = 0; i < str.length; i++) {
    //if current letter matches next letter, will need to check for palindromes with an even number of characters as well as an odd number of characters.  If the current character does not match the following character, you only need to check for palindromes with an odd number.
    var count = str[i] === str[i + 1] ? 1 : 0;
    while (count >= 0) {
      var left = i;
      var right = i + count;
      while (left >= 0 && right < str.length && str[left] === str[right]) {
        var result = str.slice(left, right + 1);
        if (!dictionary[result]) dictionary[result] = true;
        left--;
        right++;
      }
      count--;
    }
  }
  return Object.keys(dictionary);
}