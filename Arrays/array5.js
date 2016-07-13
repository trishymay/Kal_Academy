// Search an element in an array where difference between adjacent elements is 1.
// For example: arr[] = {8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3}
// Search for 3 and Output: Found at index 7

function element (arr, element) {
  if (!arr || !Array.isArray(arr) || typeof element !== 'number') return null;
  var index = 0;
  while (index < arr.length) {
    if (arr[index] === element) return index;
    index += Math.abs(element - arr[index]);
    if (index % 1) return null;
  }
  return null;
}