const {
  NotImplementedError,
} = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let letter = str[0];
  let num = 0;
  let result = '';

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === letter) {
      num += 1;
    } else {
      if (num > 1) {
        result += num + letter;
      } else {
        result += letter;
      }
      letter = str[i];
      num = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
