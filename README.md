# wordhex
ES5 function to convert a string into a hex color code. The motivation behind this library is to be able to generate unique and repeatable hex color codes for people's names.

## Usage
```js
var wordhex = require('wordhex');

// Returns '#1daeea'
wordhex('npm');

// Returns '#FFFFFF'
wordhex('');

// Returns '#78835e'
wordhex('github')

// Still returns '#1daeea'
wordhex('npm');
```
