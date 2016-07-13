// Implement a method to perform a basic string compression using the counts of repeated characters. For example, the string aabccccaaa would become a2b1c4a3. If the compressed string would not become smaller than the original string, your method should return the original string.

function compression (str) {
  if (typeof str !== 'string') return null;
  var result = '';
  for (var i = 0; i < str.length; i++) {
    var count = 1;
    while (str[i] === str[i + 1]) {
      i++;
      count++;
    }
    result += str[i] + count;
    if (result.length >= str.length) return str;
  }
  return result;
}