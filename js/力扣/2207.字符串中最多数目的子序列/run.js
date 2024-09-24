/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function (text, pattern) {
    const first = pattern[0], second = pattern[1];
    let count = 0;
    let a = 0, b = 0
    if (first === second) {
        for (let index = 0; index < text.length; index++) {
            if (text[index] === first) {
                a++;
            }
        }
        count = a * (a - 1) / 2 + a
        return count
    } else {
        for (let index = 0; index < text.length; index++) {
            if (text[index] === first) {
                a++;
            }
            if (text[index] === second) {
                count += a
                b++;
            }
        }
        count += a > b ? a : b;
        return count
    }
};

console.log(maximumSubsequenceCount("abdcdbc", "ac"));
// Output: 4
console.log(maximumSubsequenceCount("fwym", "yy"));
// Output: 1