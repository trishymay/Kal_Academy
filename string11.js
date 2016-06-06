// Given a string "This is a string" reverse the characters in every word "siht si a gnirts"

function reverseEachWord (string) {
  if (typeof string !== 'string') return null;
  var result = string.split('');
  var head = 0;
  for (var i = 0; i <= result.length; i++) {
    if (result[i] === ' ' || result[i] === undefined) {
      var tail = i - 1;
      var loops = (tail + head)/2;
      for (var j = head; j < loops; j++) {
        var temp = result[j];
        result[j] = result[tail];
        result[tail] = temp;
        tail--;
      }
      head = i + 1;
    }
  }
  return result.join('');
}