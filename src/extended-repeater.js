const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param strValue
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
function repeater(strValue, options) {
    if (options == null) {
        return strValue;
    }
    strValue = String(strValue)
    let repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1
    let separator = options.hasOwnProperty('separator') ? options.separator : "+"
    let addition = options.hasOwnProperty('addition') ? options.addition : ''
    let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1
    let additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : "|"
    var calculatedAddition = Array(additionRepeatTimes).fill(String(addition)).join(additionSeparator)
    return Array(repeatTimes).fill(strValue + calculatedAddition).join(separator)
}

module.exports = {
    repeater
};