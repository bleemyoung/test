/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let arr = new Array(26).fill(0);
    for (let i = 0; i < text.length; i++) {
        arr[text.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    // console.log(arr);
    return Math.min(arr[0], arr[1], arr[13], Math.floor(arr[11] / 2), Math.floor(arr[14] / 2));
};

console.log(maxNumberOfBalloons("loonbalxballon")); // 1
console.log(maxNumberOfBalloons("leetcode")); // 0
console.log(maxNumberOfBalloons("aabbccdd")); // 0