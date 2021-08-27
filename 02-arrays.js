const cyclicRotation = (arr, k) => {
  for (let i=0; i < k; i++) {
    arr = [arr[arr.length-1], ...arr.slice(0, -1)]
  }
  return arr
}

module.exports = {
  cyclicRotation
}