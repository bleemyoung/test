/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function (s) {
    let n = s.length;
    let even = Math.floor(n / 2);
    let odd = n - even;
    // console.log(n,odd,even);
    let ans = 100000;
    let oddCount = 0;
    let evenCount = 0;
    s = s.concat(s)
    // console.log(s);
    let left = 0;
    for (let right = 0; right < 2 * n; right++) {
        while (right - left + 1 > n) {
            let temp = oddCount - (s[left] == 1 ? 1 : 0);
            oddCount = evenCount
            evenCount = temp
            left++
        }
        if ((right - left + 1) % 2 == 1) {
            oddCount += s[right] == '1' ? 1 : 0;
        } else {
            evenCount += s[right] == '1' ? 1 : 0;
        }
        if (right - left + 1 == n) {
            let cal = evenCount + odd - oddCount;
            ans = Math.min(ans, cal, n - cal);
            console.log(oddCount, evenCount, ans);
        }
    }
    if (ans == 0) return 0
    return ans;
};
// console.log(minFlips("111000"));
// console.log(minFlips("010"));
console.log(minFlips("01001001101"));

