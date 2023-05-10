function matchingStrings(strings, queries) {
  // Write your code here
  // create hash table
  let hash = {}
  // create empty results array
  // optional: let result = Array(queries.length)
  let result = []
  // loop through strings
  strings.forEach((str) => {
    // if there is no str key in hash, add key and increment by 1
    if (!hash[str]) {
      hash[str] = 1
    } else {
      // else increment by 1
      hash[str]++
    }
  })
  // loop through queries array
  queries.forEach((qry, index) => {
    // if there is a qry key in hash
    if (hash[qry]) {
      // add the value to index of result
      result[index] = hash[qry]
      // 1 || 2 etc
      console.log(hash[qry])
    } else {
      // else add a zero value
      result[index] = 0
    }
  })
  return result
}
