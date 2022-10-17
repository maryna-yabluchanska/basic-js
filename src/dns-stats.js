const {NotImplementedError} = require('../extensions/index.js');

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
    const values = new Map();
    domains.forEach(
        (item) => {
            const splitDomain = item.split(".");
            let previousDomain = "";
            for (let i = splitDomain.length - 1; i >= 0; i--) {
                const currDomain = splitDomain[i];
                if (previousDomain.length === 0) {
                    previousDomain = "." + currDomain
                } else {
                    previousDomain += "." + currDomain
                }
                if (values.get(previousDomain) === undefined) {
                    values.set(previousDomain, 1)
                } else {
                    values.set(previousDomain, values.get(previousDomain) + 1)
                }
            }
        }
    )
    return Object.fromEntries(values)
}

module.exports = {
    getDNSStats
};
