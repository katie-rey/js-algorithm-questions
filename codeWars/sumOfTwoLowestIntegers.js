function sumTwoSmallestNumbers(numbers) {
  let result = numbers.sort((a, b) => a - b).slice(0, 2)
  console.log(result)

  let sum = 0
  for (let num of result) {
    sum += parseInt(num)
  }
  return sum
}
