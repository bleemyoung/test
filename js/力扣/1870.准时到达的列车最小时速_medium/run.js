/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function (dist, hour) {
    const checkSum = (v) => {
        let sum = 0
        for (let i = 0; i < dist.length - 1; i++) {
            sum += Math.ceil(dist[i] / v)
            // console.log(t);
        }
        sum += dist[dist.length - 1] / v
        return sum
    }
    if (dist.length - 1 >= hour) return -1;
    let res = -1
    let l = 1, r = 1000000000
    while (l < r) {
        let mid = (l + r) >> 1
        if (checkSum(mid) <= hour) {
            res = mid
            r = mid
        } else {
            l = mid + 1
        }
    }
    return res
};

console.log(minSpeedOnTime([1, 3, 2], 6));
// Output: 1
console.log(minSpeedOnTime([5,3,4,6,2,2,7], 10.92));
// Output: 4
console.log(minSpeedOnTime([1, 3, 2], 1.9));
// Output: -1
console.log(minSpeedOnTime([1, 1, 100000], 2.01));
// Output: 10000000