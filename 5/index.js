/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    let answer = hashtags.map((elem) => {
        return elem.toLowerCase()
    })
    let arr = Array.from(new Set(answer)).join(", ")
    return arr
};