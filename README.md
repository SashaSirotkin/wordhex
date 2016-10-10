# wordhex
ES5 function to convert a string into a hex color code. The motivation for this library is to generate unique and repeatable hex color codes for a person's name.

## Usage
```js
var wordhex = require('wordhex');

// Returns '#2daeeb'
var hexcode = wordhex('npm');

// Returns '#FFFFFF'
var hexcode = wordhex('');

// Still returns '#2daeeb'
var hexcode = wordhex('npm');
```
