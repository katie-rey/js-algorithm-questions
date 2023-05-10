function lonelyinteger(arr) {
  var result = arr.sort().filter((x, i, arr) => x !== arr[i + 1] && x !== arr[i - 1])
  // filter takes callbackfn, thisarg, index, current arr
  return result[0]
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1])
