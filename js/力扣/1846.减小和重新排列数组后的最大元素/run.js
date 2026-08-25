/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function (arr) {
    arr.sort((a, b) => a - b);
    arr[0] = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            arr[i] = arr[i - 1] + 1;
        }
    }
    return arr[arr.length - 1];
};

console.log(maximumElementAfterDecrementingAndRearranging([1, 2, 3, 4, 5]))//5
console.log(maximumElementAfterDecrementingAndRearranging([1, 1, 1, 1, 1]))//1
console.log(maximumElementAfterDecrementingAndRearranging([2, 2, 1, 2, 1]))//2