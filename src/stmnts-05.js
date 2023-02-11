/*
 * stmnts-05.js
 * Language: javascript
 * Test: tests/stmnts-05.test.js
 * Path: src/stmnts-05.js
 * Boolean expressions for numbers
 */

/**
 * Check if a number is odd
 * @param {number} num - number to check
 * @returns {boolean} - true if num is odd, false otherwise
 */
function isOdd(num) {
  let result;
  if (num % 2 === 0) {
    result = false;
  } else {
    result = true;
  }
  return result;
}

/**
 * Check if a number is even
 * @param {number} num - number to check
 * @returns {boolean} - true if num is even, false otherwise
 */
function isEven(num) {
  let result = false;
  if (num % 2 === 0) {
    result = true;
  }
  return result;
}

/**
 * Check if a value is a number and negative
 * @param {*} value
 * @returns {boolean} - true if value is a negative number, false otherwise
 */
function isNegative(value) {
  let result = false;
  if (typeof value === 'number' && value < 0) {
    result = true;
  }
  return result;
}

module.exports = {
  isOdd,
  isEven,
  isNegative,
};
