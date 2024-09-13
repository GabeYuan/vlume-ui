describe('基本测试', () => {
  it('应该通过一个简单的断言', () => {
    expect(true).toBe(true)
  })

  it('应该正确计算 1 + 1', () => {
    expect(1 + 1).toBe(2)
  })

  it('应该正确连接字符串', () => {
    expect('Hello' + ' ' + 'World').toBe('Hello World')
  })
})
