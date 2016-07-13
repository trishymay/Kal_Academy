// A magic index in an array A[0…n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index if one exists, in an array A. FOLLOW UP: What if the values are not distinct?

function magicDistinct (arr) {
  if (!arr || !Array.isArray(arr) || !arr.length) return null;
  if (arr[0] === 0) return 0;
  return null;
}

function magic (arr) {
  if (!arr || !Array.isArray(arr) || !arr.length) return null;
  var current = 0;
  //will return null if array iterates to a negative number or a number that is not sorted or a float
  while (current < arr.length && current >= 0) {
    if (arr[current] === current) return current;
    if (arr[current] % 1 || arr[current] < current) return null;
    current = arr[current];
  }
  return null;
}