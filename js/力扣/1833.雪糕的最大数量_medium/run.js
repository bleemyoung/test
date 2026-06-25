/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    costs.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < costs.length; i++) {
        if (coins >= costs[i]) {
            count++;
            coins -= costs[i];
        } else {
            break;
        }
    }
    return count;
};

console.log(maxIceCream([1,3,2,4,1],7))