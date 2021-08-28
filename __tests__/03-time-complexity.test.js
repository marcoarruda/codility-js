const { describe, expect, test } = require('@jest/globals')

const { frogJmp } = require('../03-time-complexity')

describe('frogJmp', () => {
  test('frogJmp', () => {
    expect(frogJmp(10, 85, 30)).toBe(3)
  })
})
