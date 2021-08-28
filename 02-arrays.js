const cyclicRotation = (arr, k) => {
  for (let i=0; i < k; i++) {
    arr = [arr[arr.length-1], ...arr.slice(0, -1)]
  }
  return arr
}

const findOddNumber = (A) => {
  let occurs = []
  for (n of A) {
    let o = occurs.find(o => o.key == n)
    if (!o) {
      occurs.push({key: n, count: 1})
    } else {
      o.count++
    }
  }
  return occurs.find(o => o.count % 2 != 0).key
}

module.exports = {
  cyclicRotation,
  findOddNumber,
}
