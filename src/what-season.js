const {
  NotImplementedError,
} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  if (Object.keys(date).length > 0) {
    throw new Error("Invalid date!");
  }

  let initDate = new Date(date);
  let month = initDate.getMonth();
  console.log(typeof month, month);

  if (month == 11 || month <= 1) {
    console.log('winter');
    return 'winter';
  } else if (1 < month && month <= 4) {
    console.log('spring');
    return 'spring';
  } else if (4 < month && month <= 7) {
    console.log('summer');
    return 'summer';
  } else if (7 < month && month <= 10) {
    console.log('autumn');
    return 'autumn';
  }
}

module.exports = {
  getSeason,
};
