var seed = require('seedrandom');

// To protect against unlikely out of scope hex values (i.e. 16).
var SMALL_FLOAT = 0.00000000000000001;

/*
 * Returns a hex value for a given randon number (e.g. 0.32746743882549856).
 */
function toHex(randNum) {
  return (Math.floor((randNum - SMALL_FLOAT) * 16)).toString(16);
}

/*
 * Returns a hex color code (e.g. #CC00FF) for a given string.
 * Returns #FFFFFF for the empty string.
 */
module.exports = function wordhex(str) {
  var rand;
  if (!str) {
    return '#FFFFFF';
  }
  rand = seed(str);
  return '#' + toHex(rand()) + toHex(rand()) + toHex(rand())
             + toHex(rand()) + toHex(rand()) + toHex(rand());
};
