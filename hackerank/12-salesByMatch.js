// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
  // Array validation
  if (!ar || ar.length !== n) {
    return 0
  }

  // Counting pairs
  let pairs = 0
  let counterObj = {}

  for (let sock of ar) {
    if (!counterObj[sock]) {
      counterObj[sock] = 1
    } else {
      counterObj[sock] = counterObj[sock] + 1

      if (counterObj[sock] === 2) {
        pairs++
        counterObj[sock] = 0
      }
    }
  }
  return pairs
}
