const { describe, expect, test } = require('@jest/globals')

const { findOddNumber } = require('../../02-arrays')

describe('Arrays', () => {
  test('Odd number', () => {
    expect(findOddNumber([9, 3, 9, 3, 9, 7, 9])).toBe(7)
  })
})
