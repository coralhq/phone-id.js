# phone-id.js

A library to generate Indonesian phone numbers. Numbers may or may not be valid.

## Generating Phone Numbers

```javascript
const phoneid = require('phoneid')

// Any operator
number = phoneid.anything(8, false)

// Axis
number = phoneid.axis(8, false)

// Byru
number = phoneid.byru(8, false)

// Indosat
number = phoneid.indosat(8, false)

// Lippo
number = phoneid.lippo(8, false)

// Sampoerna
number = phoneid.sampoerna(8, false)

// Smartfren
number = phoneid.smartfren(8, false)

// Telkomsel
number = phoneid.telkomsel(8, false)

// Three
number = phoneid.three(8, false)

// XL
number = phoneid.xl(8, false)
```

`length` - The length after the international prefix and operator code

`international_prefix` - If set to `true` will prefix with `+62` else it will prefix with `0`.

## Installing

```
$ npm install phone-id.js
```

## Testing

```
$ npm test
```

## License

Please see `LICENSE.txt`.