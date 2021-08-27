const binaryGap = (integer) => {
  const binary = integer.toString(2)

  let count = 0
  let gap = 0
  for (c of binary) {
    if (c == 0) {
      count++
    } else {
      if (count > gap) {
        gap = count
      }
      count = 0
    }
  }
  return gap
}

module.exports = {
  binaryGap
}
