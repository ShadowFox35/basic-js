const {
  NotImplementedError,
} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options['addition'] !== undefined) {
    options['addition'] = String(options['addition']);
  } else {
    delete options['addition'];
  }

  str = String(str);

  let result = str;

  if (!options['separator']) {
    options['separator'] = '+';
  }

  if (options['addition']) {
    if (!options['additionSeparator']) {
      options['additionSeparator'] = '|';
    }
  }
  i = 0;
  do {
    if (
      !options['repeatTimes'] &&
      !options['additionRepeatTimes']
    ) {
      result += options['addition'];
    } else if (i == options['repeatTimes'] - 1) {
      result += aditional(options);
    } else {
      result +=
        aditional(options) + options['separator'] + str;
    }
    i++;
  } while (i < options['repeatTimes']);

  return result;
}
function aditional(options) {
  let resultSep = options['addition'];
  if (options['additionRepeatTimes']) {
    for (
      let i = 1;
      i < options['additionRepeatTimes'];
      i++
    ) {
      resultSep +=
        options['additionSeparator'] + options['addition'];
    }
    return resultSep;
  }
  if (options['addition']) {
    return resultSep;
  }
  return '';
}
module.exports = {
  repeater,
};
