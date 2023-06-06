let arr = [2, 1, 4, 3, 5, 8, 10]

// pseudocode
// sort code first
arr.sort()

//round center to highest integer
let center = Math.ceil(arr.length / 2)
console.log(center)

// create two empty arrays
let left = []
let right = []

// create a loop and sort array
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i])
  if (arr[i] <= center) {
    left.push(arr[i])
  } else {
    right.push(arr[i])
  }
}

// sort both arrays
let sortedLeft = left.sort((a, b) => a - b)
// reverse right array
let sortedRight = right.sort((a, b) => a - b).reverse()
console.log(sortedRight)

// concat both arrays
let finalArr = sortedLeft.concat(sortedRight)

console.log(finalArr)
