/**
 *
 * @param num {Number}
 *
 * @returns {string}
 */
module.exports = (num) => {
    return (num > 9 ? "" : "0") + num;
};