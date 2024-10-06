/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let index = 0
    let sum = 0
    for (let i = 0; i < gas.length; i++) {
        sum += gas[i] - cost[i]
        if (sum < 0) {
            index = i + 1
            sum = 0
        }
    }
    if(index === gas.length) return -1;
    // 从起点index跑一遍验证
    let newGas = gas.concat(gas)
    let newCost = cost.concat(cost)
    sum = 0
    // console.log(newGas, newCost);
    // console.log(index);
    for (let i = 0; i < gas.length; i++) {
        sum += newGas[index + i] - newCost[index + i]
        if (sum < 0) {
            return -1
        }
    }
    return index
};

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
// // Output: 3
// console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
// // Output: -1
console.log(canCompleteCircuit([3, 1, 1], [1, 2, 2]));
// Output: 0