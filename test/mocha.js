const {should, expect, assert} = require('chai')
const {add, mul} = require('../src/math')

describe('#math', () => {
  describe('add', () => {
    it('should return 5 when 2 + 3', () => {
      expect(add(2, 3), 5)
    })

    // it.only只执行当前，it.skip跳过当前这条测试
    it('should return -1 when 2 - 3', () => {
      expect(add(2, -3), -1)
    })
  })

  describe('mul', () => {
    it('should return 5 when 2 * 3', () => {
      expect(mul(2, 3), 6)
    })
  })
})
