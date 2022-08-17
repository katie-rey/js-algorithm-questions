function diagonalDifference(arr) {
  let firstDiagonalSum = arr[0][0] + arr[1][1] + arr[2][2]
  let secondDiagonalSum = arr[0][2] + arr[1][1] + arr[2][0]
  let result = secondDiagonalSum - firstDiagonalSum

  return result
}
