/**
 * @param {number[]} energyDrinkA
 * @param {number[]} energyDrinkB
 * @return {number}
 */
var maxEnergyBoost = function (energyDrinkA, energyDrinkB) {
    let n = energyDrinkA.length;
    let fa = new Array(n).fill(0)
    let fb = new Array(n).fill(0)
    fa[0] = energyDrinkA[0]
    fb[0] = energyDrinkB[0]
    for (let i = 1; i < n; i++) {
        fa[i] = Math.max(fa[i - 1] + energyDrinkA[i], fb[i - 1])
        fb[i] = Math.max(fb[i - 1] + energyDrinkB[i], fa[i - 1])
        // if (i == 1) {
        //     fa[i] = Math.max(fa[i - 1] + energyDrinkA[i], fb[i - 1])
        //     fb[i] = Math.max(fb[i - 1] + energyDrinkB[i], fa[i - 1])
        // } else {
        //     fa[i] = Math.max(fa[i - 1] + energyDrinkA[i], fb[i - 1])
        // }
    }
    return Math.max(fa[n - 1], fb[n - 1]);
};

console.log(maxEnergyBoost([1, 3, 1], [3, 1, 1]));
// Output: 5
console.log(maxEnergyBoost([4, 1, 1], [1, 1, 3]));
// Output: 7