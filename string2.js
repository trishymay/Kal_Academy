// Given two strings, write a method to decide if one is a permutation of the other?

function permutation (str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') return null;
  if (str1.length !== str2.length) return null;
  var dictionary = {};
  for (var i = 0; i < str1.length; i++) {
    if (dictionary[str1[i]]) dictionary[str1[i]]++;
    else dictionary[str1[i]] = 1;
  }
  for (var j = 0; j < str2.length; j++) {
    if (dictionary[str2[j]] > 0) dictionary[str2[j]]--;
    else return false;
  }
  return true;
}