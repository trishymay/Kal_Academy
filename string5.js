// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

function zeroMatrix (arr) {
  if (!Array.isArray(arr) || !Array.isArray(arr[0])) return null;
  var rows = arr.length;
  var columns = arr[0].length;
  var rowsToZero = {};
  var columnsToZero = {};
  if (!rows || !columns) return null;
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      if (arr[i][j] === 0) {
        if (!rowsToZero[i]) rowsToZero[i] = 1;
        if (!columnsToZero[j]) columnsToZero[j] = 1;
      }
    }
  }
  rowsToZero = Object.keys(rowsToZero);
  columnsToZero = Object.keys(columnsToZero);

  while (rowsToZero.length) {
    var curr = rowsToZero.pop();
    for (var k = 0; k < columns; k++) {
      arr[curr][k] = 0;
    }
  }
  while (columnsToZero.length) {
    var curr = columnsToZero.pop();
    for (var l = 0; l < rows; l++) {
      arr[l][curr] = 0;
    }
  }
  return arr;
}