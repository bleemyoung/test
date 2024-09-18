/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
    let count = 1;
    let output = 1;
    // console.log('b'.charCodeAt()-'a'.charCodeAt());//1
    for (let i = 1; i < s.length; i++) {
        if (s[i].charCodeAt() - s[i - 1].charCodeAt() == 1) {
            count++;
        } else {
            count = 1;
        }
        output = Math.max(output, count);
    }
    return output
};
console.log(longestContinuousSubstring('abacaba'));//2
console.log(longestContinuousSubstring('abcde'));//5