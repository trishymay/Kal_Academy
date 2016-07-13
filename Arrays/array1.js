// Find the element that appears once in a sorted array where all other elements appear twice one after another. Find that element in 0(logn) complexity.
// Input:   arr[] = {1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8}
// Output:  4

function once (arr) {
  if (!arr || !Array.isArray(arr) || !arr.length || arr.length % 2 === 0) return null;
  var head = 0;
  var tail = arr.length - 1;
  while (tail >= head) {
    var mid = (tail + head)/2;
    var next = mid + 1;
    var prev = mid - 1;
    //in case of duplicate pairs
    while (arr[mid] === arr[next] === arr[prev]) {
      next++;
      prev--;
    }
    if (arr[mid] === arr[prev]) {
      if (mid % 2) head = next;
      else tail = prev - 1;
    } else if (arr[mid] === arr[next]) {
      if (mid % 2) tail = prev;
      else head = next + 1;
    } else return arr[mid];
  }
  return null;
}

