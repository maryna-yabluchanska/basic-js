const {NotImplementedError} = require('../extensions/index.js');

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
    var stringValue = "" + n;
    var result = 0;
    for (var i = 0; i < stringValue.length; i++) {
        var digits = stringValue.split('')
        digits.splice(i, 1);
        var joinedDigits = digits.join('')
        if (joinedDigits > result) {
            result = joinedDigits;
        }
    }
    return Number(result);
}

module.exports = {
    deleteDigit
};
