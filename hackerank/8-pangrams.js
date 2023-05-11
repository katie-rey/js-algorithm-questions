function pangrams(s) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  let letterCount = Array(27).fill(0)
  s = s.toLowerCase()
  // console.log(str)
  let str = s
  str = s.replace(/\s/g, '').split('').sort()
  console.log(str)
  let newArr = [...new Set(str)]
  let newArr2 = newArr.join('')
  console.log(alph)
  console.log(newArr2)

  if (alph === newArr2) {
    console.log('pangram')
    return 'pangram'
  } else {
    console.log('not pangram')
    return 'not pangram'
  }
}

// this is a pangram that will return 'pangram
pangrams('We promptly judged antique ivory buckles for the next prize')
