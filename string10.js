// Given a string "This is a string" reverse its characters "gnirts a si siht"

function reverseString (string) {
  if (typeof string !== 'string') return null;
  var result = '';
  for (var i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
}