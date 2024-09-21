/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function (edges) {
    let n = edges.length
    let val = new Array(n).fill(0)
    let max = 0, index = 0
    for (let i = 0; i < n; i++) {
        val[edges[i]] += i
    }
    for (let i = 0; i < n; i++) {
        if (val[i] > max) {
            max = val[i]
            index = i
        }
    }
    return index
};

console.log(edgeScore([1, 0, 0, 0, 0, 7, 7, 5]));//7
console.log(edgeScore([2, 0, 0, 2]));//0