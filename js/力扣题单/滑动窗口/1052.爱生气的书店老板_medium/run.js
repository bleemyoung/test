/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
    let n = customers.length
    let base = 0
    let sum = 0
    for (let i = 0; i < n; i++) {
        base += customers[i] * (grumpy[i] == 1 ? 0 : 1)
        grumpy[i] *= customers[i]
        if (i < minutes) {
            sum += grumpy[i]
        }
    }
    let find = sum
    for (let r = 1; r <= n - minutes; r++) {
        sum += grumpy[minutes + r - 1] - grumpy[r - 1]
        find = Math.max(find, sum)
    }
    console.log(base, find)
    return find + base
};

console.log(0 ^ 1);