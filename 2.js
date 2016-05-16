// A magic index in an array A[0…n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index if one exists, in an array A. FOLLOW UP: What if the values are not distinct?

function magic (arr) {
  if (!arr || !Array.isArray(arr) || !arr.length) return null;
  var current = 0;
  while (current < arr.length) {
    if (arr[current] === current) return current;
    current = arr[current];
  }
  return null;
}