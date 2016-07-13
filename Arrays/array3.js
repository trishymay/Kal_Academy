// Given a sorted array of n integers that has been rotated an unknown number of times, write code to find an element in the array. You may assume that the array was originally sorted in increasing order.

//Since duplicates are not excluded, there is additional code to iterate the head and tail inward if the head and tail are both equal to the mid.  This code will only execute if the head, mid and tail are all the same element

function findElement (arr, n, element) {
  if (!arr || !Array.isArray(arr) || !arr.length || typeof element !== 'number') return null;
  var head = 0;
  var tail = n - 1;
  while (tail > head) {
    var mid = Math.floor((tail + head)/2);
    while (arr[head] === arr[mid] === arr[tail]) {
      if (arr[head] === element) return head;
      head++;
      tail--;
    }
    if (arr[head] === element) return head;
    if (arr[mid] === element) return mid;
    if (arr[tail] === element) return tail;
    if (arr[head] === arr[mid]) {
      head = mid + 1;
      tail--;
    } else if (arr[mid] === arr[tail]) {
      tail = mid - 1;
      head++;
    } else if (arr[head] < arr[mid]) {
      if (arr[head] < element && element < arr[mid]) {
        head++;
        tail = mid - 1;
      } else {
        head = mid + 1;
        tail--;
      }
    } else {
      if (arr[mid] < element && element < arr[tail]) {
        head = mid + 1;
        tail--;
      } else {
        head++;
        tail = mid - 1;
      }
    }
  }
  return null;
}