const {NotImplementedError} = require('../extensions/index.js');

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
    try {
        function isValidDate(date) {
            return date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(Date.parse(date) && Date.parse(date) !== 0 &&
                !isNaN(date.getTime()) && date instanceof Date == true);
        }
        if (arguments.length === 0) {
            return "Unable to determine the time of year!";
        } else if (!isValidDate(date)) {
            throw new Error('Invalid date!');
        } else if (2 <= date.getMonth() && date.getMonth() <= 4) {
            return 'spring';
        } else if (5 <= date.getMonth() && date.getMonth() <= 7) {
            return 'summer';
        } else if (8 <= date.getMonth() && date.getMonth() <= 10) {
            return 'autumn';
        } else if (date.getMonth() === 11 || date.getMonth() === 0 || date.getMonth() === 1) {
            return 'winter';
        } else {
            throw new Error('Invalid date!');
        }

    } catch (e) {
        throw new Error('Invalid date!');
    }
}


module.exports = {
    getSeason
};


