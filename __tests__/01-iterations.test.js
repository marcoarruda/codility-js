const { describe, expect, test } = require('@jest/globals')

const { binaryGap } = require('../01-iterations')

describe('Iterations', () => {
  test('binary gap', () => {
    expect(binaryGap(9)).toBe(2)
    expect(binaryGap(529)).toBe(4)
    expect(binaryGap(20)).toBe(1)
    expect(binaryGap(15)).toBe(0)
    expect(binaryGap(32)).toBe(0)
    expect(binaryGap(1041)).toBe(5)
  })
})
