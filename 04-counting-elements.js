const frogRiverOne = (X, A) => {
  const neededLeaves = []
  let i = 0
  while (i < X) {
    neededLeaves.push(false)
    i++
  }

  i = 0
  while (i < A.length) {
    const pos = A[i] - 1
    neededLeaves[pos] = true
    let done = neededLeaves.every(value => value)
    if (done) {
      return i
    }
    i++
  }
  return -1
}

module.exports = {
  frogRiverOne,
}
