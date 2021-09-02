const frogJmp = (X, Y, D) => {
  return Math.ceil((Y-X) / D)
}

const permMissingElem = (A) => {
  const check = new Array(A.length + 1)
  for (let n of A) {
    check[n-1] = true
  }
  return check.findIndex(n => !n) + 1
}

const tapeEquilibrium = (A) => {
  const total = A.reduce((acc, curr) => acc + curr, 0)
  let minDiff = Number.MAX_SAFE_INTEGER
  let sum1 = 0
  let sum2 = 0
  let diff
  let first = true
  for (let c of A) {
    if (first) {
      first = false
      continue
    }
    sum1 += c
    sum2 = total - sum1
    diff = Math.abs(sum1 - sum2)
    minDiff = diff < minDiff ? diff : minDiff
  }

  return minDiff
}

module.exports = {
  frogJmp,
  permMissingElem,
  tapeEquilibrium,
}
