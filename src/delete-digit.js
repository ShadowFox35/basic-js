const {
  NotImplementedError,
} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n + '';
  let arr = str.split('');
  const newarr = [];

  arr.forEach((elem, index) => {
    let arr2 = arr.filter(
      (elem, index1) => index1 !== index
    );
    let newelem = arr2.join('');
    newarr.push(Number(newelem));
  });
  newarr.sort((a, b) => b - a);
  return newarr[0];
}

module.exports = {
  deleteDigit,
};
