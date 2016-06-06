// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

function unique (str) {
  if (typeof str !== 'string' || !str.length) return null;
  var dictionary = {};
  for (var i = 0; i < str.length; i++) {
    if (dictionary[str[i]]) return false;
    dictionary[str[i]] = true;
  }
  return true;
}

// If no additional data structures - use quicksort and compare.  Solution below.  In JavaScript, this would still use an additional data structure because strings can have characters added on or removed from the end, but the letters can't be rearranged unless the string is broken into a character array.  If you truly could not use an additional data structure, each letter could be compared with all letters following it in the array which would have running time of O((n * (n - 1))/2).

function uniqueSorted (str) {
  if (typeof str !== 'string') return null;
  if (str.length < 2) return true;
  var arr = str.split('');
  quicksort(arr, 0, arr.length - 1);
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) return false;
  }
  return true;
}

function quicksort (arr, start, end) {
  var pivot = arr[start];
  var left = start;
  var right = end;
  while (left < right) {
    while (arr[right] >= pivot && left < right) {
      right--;
    }
    if (left < right) {
      arr[left] = arr[right];
      arr[right] = pivot;
      left++;
    }

    while (arr[left] < pivot && left < right) {
      left++;
    }
    if (left < right) {
      arr[right] = arr[left];
      arr[left] = pivot;
      right--;
    }
  }
  if (left - start > 1) quicksort(arr, start, left - 1);
  if (end - right > 1) quicksort(arr, right + 1, end);
}
