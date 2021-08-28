const { describe, expect, test } = require('@jest/globals')

const { cyclicRotation, findOddNumber } = require('../02-arrays')

describe('Cyclic Rotation', () => {
  test('Cyclic Rotation', () => {
    expect(cyclicRotation([3, 8, 9, 7, 6], 3)).toMatchObject([9, 7, 6, 3, 8])
  })
})

describe('Odd number', () => {
  test('Odd number', () => {
    expect(findOddNumber([9, 3, 9, 3, 9, 7, 9])).toBe(7)
  })
})
