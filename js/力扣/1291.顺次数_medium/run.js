/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
    let ans = []
    for (let d = 1; d < 10; d++) {
        let x = d
        for (let i = d; i < 10; i++) {
            if (x > high) {
                break
            }
            if (x >= low) {
                ans.push(x)
            }
            x = x * 10 + i + 1
        }
    }
    ans = ans.sort((a, b)=>a-b)
    return ans
};

console.log(sequentialDigits(1000,13000));