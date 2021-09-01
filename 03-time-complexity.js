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

module.exports = {
  frogJmp,
  permMissingElem,
}
