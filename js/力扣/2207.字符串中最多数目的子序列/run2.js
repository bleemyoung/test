/**
 * @param {string} text
 * @param {string} pattern
 * @return {number}
 */
var maximumSubsequenceCount = function (text, pattern) {
    const first = pattern[0], second = pattern[1];
    // console.log(first, second);
    let count = 0;
    let a = [], b = []
    if (first === second) {
        for (let index = 0; index < text.length; index++) {
            if (text[index] === first) {
                a.push(index);
            }
        }
        count = a.length * (a.length - 1) / 2 + a.length
        return count
    } else {
        for (let index = 0; index < text.length; index++) {
            if (text[index] === first) {
                a.push(index);
            }
            if (text[index] === second) {
                count += a.length
                b.push(index);
            }
        }
        count += a.length > b.length ? a.length : b.length;
        return count
    }
};

console.log(maximumSubsequenceCount("abdcdbc", "ac"));
// Output: 4
console.log(maximumSubsequenceCount("fwym", "yy"));
// Output: 1