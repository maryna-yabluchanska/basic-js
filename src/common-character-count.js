const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
    var count = 0;
    const s1Characters = s1.split('');
    const s2Characters = s2.split('');
    s2Characters.forEach((char) => {
            let charIndex = s1Characters.indexOf(char)
            if (charIndex !== -1) {
                count++;
                s1Characters.splice(charIndex, 1);
            }
        }
    )
    return count;
}

module.exports = {
    getCommonCharacterCount
};

getCommonCharacterCount('aabcc', 'adcaa');
