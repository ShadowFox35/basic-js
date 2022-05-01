const {
  NotImplementedError,
} = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  arr = [];
  matrix.forEach((element, index) => {
    element.forEach((item, indexItem) => {
      if (index === 0) {
        arr.push(item);
      } else if (matrix[index - 1][indexItem] !== 0) {
        arr.push(item);
      }
    });
  });
  console.log(arr);
  let result = arr.reduce(function (sum, current) {
    return sum + current;
  }, 0);
  return result;
}

module.exports = {
  getMatrixElementsSum,
};
