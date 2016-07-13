// Remove spaces from a given string in O(n) running time and only one traversal of a string.
// Input: “I     love     ice   cream”
// Output: “Iloveicecream”

function noSpaces (string) {
  if (typeof string !== 'string') return null;
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') result += string[i];
  }
  return result;
}