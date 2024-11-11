/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
    let mem = new Map()
    function dfs(len, arr) {
        console.log(len, arr);
        if (arr.length == 0) return 0
        if (arr.length == 1) {
            if (arr[0] == 0 || arr[0] == len - 1) {
                return 0
            } else {
                return len
            }
        }
        if (mem.has(arr)) {
            const res = mem.get(arr)
            if (res.has(len)) {
                return res.get(len)
            }
        }
        let minCost = Infinity
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 0 || arr[i] == len - 1) {
                continue
            }
            let left = arr.slice(0, i)
            let right = arr.slice(i + 1)
            right = right.map((v) => v - arr[i])
            // console.log(i, arr[i]);
            // console.log(arr);
            console.log('left:', left);
            console.log("right:", right);
            if (left.length == 0) {
                minCost = Math.min(minCost, len + dfs(len - arr[i], right))
            } else if (right.length == 0) {
                minCost = Math.min(minCost, len + dfs(arr[i], left))
            } else {
                minCost = Math.min(minCost, len + dfs(arr[i], left) + dfs(len - arr[i], right))
            }
        }
        if (!mem.has(arr)) {
            mem.set(arr, new Map())
        }
        mem.get(arr).set(len, minCost + 1)
        return minCost + 1
    }
    cuts.sort((a, b) => a - b)
    return dfs(n, cuts)
};

// console.log(minCost(7, [1, 3, 4, 5]));
console.log(minCost(9, [5, 6, 1, 4, 2]));

let arr = [1, 3, 4, 5];
// console.log(arr.slice(0, 1));
// console.log(arr.slice(2));