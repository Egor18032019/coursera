/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    let time = hours * 60 + minutes + interval;
    let curentHour = Math.floor(time / 60)
    let curentMinutes = time - curentHour * 60
    if (curentMinutes < 10) {
        curentMinutes = "0" + curentMinutes
    }
    if (curentHour > 23) {
        curentHour = Math.floor(curentHour%24)
    }
    if (curentHour < 10) {
        curentHour = "0" + curentHour
    }

    let curentTime = curentHour + ":" + curentMinutes
    return curentTime;
};