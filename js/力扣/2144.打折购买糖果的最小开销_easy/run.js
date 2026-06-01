// 2144. 打折购买糖果的最小开销
/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    const n = cost.length
    cost = cost.sort((a, b) => {
        return b - a
    })
    // console.log(cost)
    let ans = 0
    for (let i = 0; i < n; i++) {
        if ((i + 1) % 3 !== 0) {
            ans += cost[i]
        }
    }
    
    return ans
};


// console.log(minimumCost([1, 2, 3]));
console.log(minimumCost([6,5,7,9,2,2]));