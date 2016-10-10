/* eslint-disable func-names, space-before-function-paren */

var wordhex = require('../index');

test('#FFFFFF for the empty string', function() {
  expect(wordhex('')).toBe('#FFFFFF');
});

test('predictable results', function() {
  expect(wordhex('sasha')).toBe('#c38d0c');
  // Run it again to make sure it is the same result.
  expect(wordhex('sasha')).toBe('#c38d0c');
});

test('distinct colors for similar strings', function() {
  expect(wordhex('steve')).toBe('#966d78');
  expect(wordhex('steven')).toBe('#898c43');
});

test('accept single-character strings', function() {
  expect(wordhex('a')).toBe('#68599a');
});

test('accept three-character strings', function() {
  expect(wordhex('npm')).toBe('#1daeea');
});

test('never return 10 as a hex result', function() {
  expect(wordhex('ooo')).toBe('#f28e6f');
});
