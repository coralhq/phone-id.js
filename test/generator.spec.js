const phoneid = require('../phoneid/generator')
const chai = require('chai')

chai.should()

describe('Generator', function() {
  it('should return a valid string', function() {
    const number = phoneid.anything()

    number.should.be.a.string(number)
  })

  it('should be prefixed with 0 if international_prefix = false', function() {
    const number = phoneid.anything()

    number
      .charAt(0)
      .should.eql('0')
  })

  it('should be prefixed with +62 if international_prefix = true', function() {
    const number = phoneid.anything(8, true)

    number
      .substring(0, 3)
      .should.eql('+62')
  })

  it('should generate 8 random numbers apart from prefixes', function() {
    const number = phoneid.xl(8, false)

    number
      .substring(4, number.length)
      .length
      .should.eql(8)
  })
})