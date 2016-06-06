// Write a method to replace all spaces in a string with ‘%20’.

function replace (str) {
  if (typeof str !== 'string') return null;
  var result = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === ' ') result += '%20';
    else result += str[i];
  }
  return result;
}