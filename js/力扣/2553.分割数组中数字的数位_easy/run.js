/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
    var res = []
    for (let num of nums) {
        let str = num.toString()
        for (let i = 0; i < str.length; i++) {
            res.push(parseInt(str[i]))
        }
    }
    return res
};

console.log(separateDigits([13, 25, 83, 77]));