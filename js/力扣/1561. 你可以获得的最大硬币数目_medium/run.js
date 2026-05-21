/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
    let n = piles.length / 3;
    let ans = 0;
    piles.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
        ans += piles[3 * n - 2 - 2 * i]
    }
    return ans;
};



console.log(maxCoins([2, 4, 1, 2, 7, 8])); // 9
console.log(maxCoins([2, 4, 5])); // 4
console.log(maxCoins([9, 8, 7, 6, 5, 1, 2, 3, 4])); // 18