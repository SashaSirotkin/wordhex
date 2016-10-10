/* eslint-disable func-names, space-before-function-paren */

var wordhex = require('../index');

test('#FFFFFF for the empty string', function() {
  expect(wordhex('')).toBe('#FFFFFF');
});

test('predictable results', function() {
  expect(wordhex('sasha')).toBe('#d39d0c');
  // Run it again to make sure it is the same result.
  expect(wordhex('sasha')).toBe('#d39d0c');
});

test('distinct colors for similar strings', function() {
  expect(wordhex('steve')).toBe('#967e88');
  expect(wordhex('steven')).toBe('#8a8d44');
});

test('accept single-character strings', function() {
  expect(wordhex('a')).toBe('#79699a');
});

test('accept three-character strings', function() {
  expect(wordhex('npm')).toBe('#2daeeb');
});
