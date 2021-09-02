const { describe, expect, test } = require('@jest/globals')

const { frogJmp, permMissingElem, tapeEquilibrium } = require('../03-time-complexity')

describe('frogJmp', () => {
  test('frogJmp', () => {
    expect(frogJmp(10, 85, 30)).toBe(3)
  })
})

describe('permMissingElem', () => {
  test('permMissingElem', () => {
    const arr = [2, 3, 1, 5]
    expect(permMissingElem(arr)).toBe(4)
  })
})

describe('tapeEquilibrium', () => {
  test('tapeEquilibrium', () => {
    const arr = [3, 1, 2, 4, 3]
    expect(tapeEquilibrium(arr)).toBe(1)

    expect(tapeEquilibrium([-1000, 1000])).toBe(2000)
  })
})
