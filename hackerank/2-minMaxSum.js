function miniMaxSum(arr) {
  let unsortedArr = arr
  let sortArr = unsortedArr.sort(function (a, b) {
    return a - b
  })
  let minNums = sortArr.slice(0, 4).reduce((prev, curr) => prev + curr)
  let maxNums = sortArr.slice(1, 5).reduce((prev, curr) => prev + curr)
  console.log(minNums, maxNums)
}

miniMaxSum([1, 2, 3, 4, 5, 6])
