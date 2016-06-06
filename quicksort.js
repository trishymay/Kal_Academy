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