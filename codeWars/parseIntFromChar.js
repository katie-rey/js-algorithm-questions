function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
  let age = inputString.slice(0, 1)
  let numAge = parseInt(age)
  return numAge
}
// Alternative solutions

function getAge(inputString) {
  return Number(inputString[0])
}

function getAge(inputString) {
  return +inputString[0]
}

function getAge(inputString) {
  // return correct age (int). Happy coding :)
  return parseInt(inputString.charAt(0))
}

getAge('1 year old')
