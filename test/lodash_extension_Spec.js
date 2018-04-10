describe("Lodash extension", function () {
  describe("_.isNonEmptyString", function () {
    it("Should be defined", function () {
      expect(_.isNonEmptyString).toBeDefined()
    })
    it("Should refuse non String", function () {
      expect(_.isNonEmptyString(['abcd'])).toEqual(false)
    })
    it("Should refuse empty arg", function () {
      expect(_.isNonEmptyString()).toEqual(false)
    })
    it("Should refuse empty String", function () {
      expect(_.isNonEmptyString('')).toEqual(false)
    })
    it("Should refuse blank String", function () {
      expect(_.isNonEmptyString('  ')).toEqual(false)
    })
    it("Should accept normal string String", function () {
      expect(_.isNonEmptyString('abcd')).toEqual(true)
    })
    it("Should accept string full of whitespaces String", function () {
      expect(_.isNonEmptyString('   e   ')).toEqual(true)
    })
  })
})
