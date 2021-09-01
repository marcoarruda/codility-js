const { describe, expect, test } = require('@jest/globals')

const { frogJmp, permMissingElem } = require('../03-time-complexity')

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
