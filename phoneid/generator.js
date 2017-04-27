'use strict'

const 
  AXIS_PREFIXES       = require('./axis'),
  BYRU_PREFIXES       = require('./byru'),
  INDOSAT_PREFIXES    = require('./indosat'),
  LIPPO_PREFIXES      = require('./lippo'),
  SAMPOERNA_PREFIXES  = require('./sampoerna'),
  SMARTFREN_PREFIXES  = require('./smartfren'),
  TELKOMSEL_PREFIXES  = require('./telkomsel'),
  THREE_PREFIXES      = require('./three'),
  XL_PREFIXES         = require('./xl')

let phoneid = {
  generatePhoneNumber: (prefixes, length=8, international_prefix=false) => {
    const randomIndex = Math.floor(Math.random() * prefixes.length)
    const prefix = prefixes[randomIndex]

    const min = Math.pow(10, length-1)
    const max = Math.pow(10, length) - 1

    const getRandomIntegerFromRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const number = getRandomIntegerFromRange(min, max).toString()
    const intl = international_prefix ? '+62' : '0'

    return (String) (intl + prefix + number)
  }
}

phoneid.anything = (length, international_prefix) => {
  const prefixes = [
    ...AXIS_PREFIXES,
    ...BYRU_PREFIXES,
    ...INDOSAT_PREFIXES,
    ...LIPPO_PREFIXES,
    ...SAMPOERNA_PREFIXES,
    ...SMARTFREN_PREFIXES,
    ...TELKOMSEL_PREFIXES,
    ...THREE_PREFIXES,
    ...XL_PREFIXES
  ]

  return phoneid.generatePhoneNumber(prefixes, length, international_prefix)
}

const generateEachOperatorGenerator = (prefixes, phoneid) => {
  for(const prefix in prefixes) {
    phoneid[prefix] = function(length, international_prefix) {
      return phoneid.generatePhoneNumber(prefixes[prefix], length, international_prefix)
    }
  }
}

generateEachOperatorGenerator({
  axis: AXIS_PREFIXES,
  byru: BYRU_PREFIXES,
  indosat: INDOSAT_PREFIXES,
  lippo: LIPPO_PREFIXES,
  sampoerna: SAMPOERNA_PREFIXES,
  smartfren: SMARTFREN_PREFIXES,
  telkomsel: TELKOMSEL_PREFIXES,
  three: THREE_PREFIXES,
  xl: XL_PREFIXES
}, phoneid)

module.exports = phoneid
