/**
 * @param {number[]} buses
 * @param {number[]} passengers
 * @param {number} capacity
 * @return {number}
 */
var latestTimeCatchTheBus = function (buses, passengers, capacity) {
    buses.sort((a, b) => a - b);
    passengers.sort((a, b) => a - b);
    let pos = 0;
    let space = 0;

    for (const arrive of buses) {
        space = capacity;
        while (space > 0 && pos < passengers.length && passengers[pos] <= arrive) {
            space--;
            pos++;
        }
    }

    pos--;
    let lastCatchTime = space > 0 ? buses[buses.length - 1] : passengers[pos];
    while (pos >= 0 && passengers[pos] === lastCatchTime) {
        pos--;
        lastCatchTime--;
    }

    return lastCatchTime;
};
// 参考官方题解
console.log(latestTimeCatchTheBus([10, 20], [2, 17, 18, 19], 2));//16
console.log(latestTimeCatchTheBus([10, 20, 30], [4, 11, 13, 19, 21, 25, 26], 2));//20