/**
 * @param {string[]} ideas
 * @return {number}
 */
var distinctNames = function (ideas) {
    let map = new Map()
    let res = 0
    for (let idea of ideas) {
        let sub = idea.slice(1)
        if (!map.has(idea[0])) {
            map.set(idea[0], new Set())
        }
        map.get(idea[0]).add(sub)
    }
    console.log(map);
    if (map.size == 0) {
        return 0
    }
    for (let [preA, setA] of map) {
        for (let [preB, setB] of map) {
            if (preA !== preB) {
                let count = getIntersectSize(setA, setB)
                res += (setA.size - count) * (setB.size - count)
            }
        }
    }
    return res;
};

var getIntersectSize = function (a, b) {
    let count = 0
    for (let item of a) {
        if (b.has(item)) {
            count++
        }
    }
    return count
}

console.log(distinctNames(["coffee", "donuts", "time", "toffee"]));
// Output: 6
console.log(distinctNames(["lack", "back"]));
// Output: 0