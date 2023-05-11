function countingSort(arr) {
  // Write your code here
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let count = new Array(100).fill(0)
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++
  }
  return count
  console.log(count)
}
