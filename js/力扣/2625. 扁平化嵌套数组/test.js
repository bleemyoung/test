/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let output = []

    function action(list, len) {
        for (let item of list) {
            if (Array.isArray(item) && len > 0) {
                action(item, len - 1)
            } else {
                output.push(item)
            }
        }
    }
    action(arr, n)
    return output
};
// https://leetcode.cn/problems/flatten-deeply-nested-array/description/
// 2625. 扁平化嵌套数组
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0));
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2));