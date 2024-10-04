/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {
    let minTime = Math.min(...time);
    let left = minTime - 1
    let right = minTime * totalTrips
    while (left < right - 1) {
        let mid = Math.floor((left + right) / 2)
        let sum = 0
        for (let t of time) {
            sum += Math.floor(mid / t)
        }
        if (sum >= totalTrips) {
            right = mid
        } else {
            left = mid
        }
    }
    return right
};

console.log(minimumTime([1, 2, 3], 5));//3
console.log(minimumTime([2], 1));//2