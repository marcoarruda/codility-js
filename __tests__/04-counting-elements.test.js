const { describe, expect, test } = require('@jest/globals')

const { frogRiverOne } = require('../04-counting-elements')

describe('frogRiverOne', () => {
  test('frogRiverOne', () => {
    const arr = [1, 3, 1, 4, 2, 3, 5, 4]
    expect(frogRiverOne(5, arr)).toBe(6)
  })
})