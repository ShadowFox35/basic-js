const {
  NotImplementedError,
} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let splitarr = [];
  let lastResult = {};
  splitarr = domains.map((elem) => {
    let splitelem = elem.split('.');
    splitelem = splitelem.map((item) => '.' + item);
    splitelem.reverse();

    let count = '';
    let editMap = {};
    splitelem.forEach((item) => {
      count += item;
      editMap[count] = count + 1;
    });

    return editMap;
  });

  splitarr.forEach((elem) => {
    for (let key in elem) {
      if (lastResult[key]) {
        lastResult[key] += 1;
      } else {
        lastResult[key] = 1;
      }
    }
  });
  return lastResult;
}

module.exports = {
  getDNSStats,
};
