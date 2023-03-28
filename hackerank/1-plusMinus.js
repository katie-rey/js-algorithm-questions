function plusMinus(arr) {
  let array = arr.length
  let positive = 0
  let negative = 0
  let zero = 0
  for (let num of arr) {
    if (num > 0) {
      positive++
    } else if (num < 0) {
      negative++
    } else if (num === 0) {
      zero++
    }
  }
  let result = []
  let posFrac = positive / arr.length
  let negFrac = negative / arr.length
  let zeroFrac = zero / arr.length

  result.push(posFrac.toFixed(6))
  result.push(negFrac.toFixed(6))
  result.push(zeroFrac.toFixed(6))

  // Write your code here
  return result
}
