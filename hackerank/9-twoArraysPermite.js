function twoArrays(k, A, B) {
  // Write your code her

  // all nums must add up to k
  // loop through A
  // lop through B
  // check if A[i] + B[i] adds to k

  A.sort()
  B.sort((reverse = True))

  for (let num in A) {
    console.log(num)

    if (A[num] + B[num2] === k) {
      console.log('yes')
      return 'Yes'
    } else {
      console.log('no')
      return 'No'
    }
  }
}

twoArrays(5, [2, 2, 3], [3, 3, 2])
