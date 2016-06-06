// Given an array of numbers, split the array into two where one array contains the sum of n-1 numbers and the other array with all the n-1 elements.

//if order is not important, On line 18, I would swap the target element with the last element, pop the last element (which is now the target element), and push pointers to both arrays into a results array to return.

//solution is assuming that original array can be modified

function splitSum (arr) {
  if (!arr || !Array.isArray(arr) || arr.length < 2) return null;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var target = sum/2;
  //going through the array in reverse because the number being searched could be in the array multiple times.  Searching from the back will find the option closest to the end of the array to allow for less shifting when the element is removed
  for (var j = arr.length - 1; j >= 0; j--) {
    if (arr[j] === target) {
      var result = [];
      var sumArray = arr.splice(j, 1);
      result.push(sumArray, arr);
      return result;
    }
  }
  return null;
}