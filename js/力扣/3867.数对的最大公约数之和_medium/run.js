// const gcd = (x, y) => { return (y === 0 ? x : gcd(y, x % y)) }
/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function (nums) {
    const gcd = (x, y) => { return (y === 0 ? x : gcd(y, x % y)) }
    let max = -1;
    const n = nums.length;
    let prefixGcd = [nums[0]]
    for (let i = 0; i < n; i++) {
        let num = nums[i];
        max = Math.max(max, num);
        prefixGcd[i] = gcd(max, num)
    }
    // console.log(prefixGcd);
    prefixGcd.sort((a, b) => a - b)
    // console.log(prefixGcd);
    let ans = 0;
    let len = Math.floor(n / 2);
    for (let i = 0; i < len; i++) {
        ans += (ans,gcd(prefixGcd[i], prefixGcd[n - 1 - i]))
    }
    return ans;
};


console.log(gcdSum([2, 6, 4]))
console.log(gcdSum([3, 6, 2, 8]))