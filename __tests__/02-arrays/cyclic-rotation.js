const { describe, expect, test } = require('@jest/globals')

const { cyclicRotation } = require('../../02-arrays')

describe('Arrays', () => {
  test('Cyclic Rotation', () => {
    expect(cyclicRotation([3, 8, 9, 7, 6], 3)).toMatchObject([9, 7, 6, 3, 8])
  })
})
