module.exports = function(ngModule) {
  describe('mc-hello', () => {
    beforeEach(window.module(ngModule.name))

    it('should test properly', () => {
      expect(false).toBe(true)
    })
  })
}
