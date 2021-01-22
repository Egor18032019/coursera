/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let result = []
    let arr =tweet.split(` `)
    arr.forEach(element => {
        if (element[0] === `#`) {
            let anwer = element.slice(1)
            result.push(anwer)
        }
    });
    return result
};