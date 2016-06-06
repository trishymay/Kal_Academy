// Given an array that contains numbers from 1 to n-1 and exactly 1 duplicate, find that duplicate.

function duplicate (arr) {
  if (!arr || !Array.isArray(arr)) return null;
  var dictionary = {};
  for (var i = 0; i < arr.length; i++) {
    var curr = arr[i];
    if (dictionary[curr]) return curr;
    dictionary[curr] = true;
  }
  return null;
}