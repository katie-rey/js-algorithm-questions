function countSheeps(arrayOfSheep) {
  let totalSheep = 0
  arrayOfSheep.map((sheep) => {
    if (sheep === true) {
      totalSheep++
    } else {
      return null
    }
  })
  return totalSheep

  // TODO May the force be with you
}
