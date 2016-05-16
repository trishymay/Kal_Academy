// Find the element that appears once in a sorted array where all other elements appear twice one after another. Find that element in 0(logn) complexity.
// Input:   arr[] = {1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8}
// Output:  4

function once (arr) {
  if (!arr || !Array.isArray(arr) || !arr.length || arr.length % 2 === 0) return null;
  while(arr.length > 3) {
    var mid = Math.floor(arr.length/2);
    if (arr[mid] === arr[mid - 1]) {
      arr = arr.slice(mid + 1);
    } else if (arr[mid] === arr[mid + 1]) {
      arr = arr.slice(0, mid);
    } else return arr[mid];
  }
  if (arr.length < 3) return null;
  if (arr[0] === arr[1] === arr[2]) return null;
  if (arr[0] === arr[1]) return arr[2];
  if (arr[1] === arr[2]) return arr[0]
  return null;
}

function onceRecursive (arr) {
  if (!arr || !Array.isArray(arr) || !arr.length || arr.length % 2 === 0) return null;
    var result = recursion(arr);
    return result[0];
}

function recursion (arr) {
  if (arr.length === 1) return arr;
  var mid = Math.floor(arr.length/2);
    if (arr[mid] === arr[mid - 1]) {
      arr = arr.slice(mid + 1);
    } else if (arr[mid] === arr[mid + 1]) {
      arr = arr.slice(0, mid);
    } else arr = arr.slice(mid, mid + 1);

  return recursion(arr);
}