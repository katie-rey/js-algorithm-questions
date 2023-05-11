function diagonalDifference(arr) {
  const len = arr[0].length
  let firstDiagonal = 0
  let secondDiagonal = 0
  let finalSum = 0

  for (let i = 0, j = len - 1; i < len; i++, j--) {
    firstDiagonal += arr[i][i]
    secondDiagonal += arr[i][j]
  }
  finalSum = firstDiagonal - secondDiagonal
  return Math.abs(finalSum)
}

// an easier to understand solution however time ecomplexity will be o(n2) - nested loops

function calculateDiagonals(matrix) {
  var n = matrix.length
  var diag1 = 0
  var diag2 = 0
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      // an element from the main diagonal
      if (i === j) {
        diag1 += matrix[i][j]
      }
      // an element from the counterdiagonal
      if (i + j === n - 1) {
        diag2 += matrix[i][j]
      }
    }
  }
  return Math.abs(diag1 - diag2)
}
