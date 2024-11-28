/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
    let num1 = Math.ceil(k / 2);
    let num2 = k - num1;
    console.log(num1, num2);
    let sumA = 0, sumB = 0
    let ans = 0
    let left = 0
    colors = colors.concat(colors.slice(0, k - 1))
    // colors= colors.concat(colors)
    for (let right = 0; right < colors.length; right++) {
        // action when add right
        if (right % 2 === 0) {
            sumA += colors[right];
        } else {
            sumB += colors[right];
        }
        // action when remove left
        while (right - left + 1 > k) {
            if (left % 2 === 0) {
                sumA -= colors[left];
            } else {
                sumB -= colors[left];
            }
            left++;
        }
        // window size k
        if (right - left + 1 == k) {
            if (left % 2 === 0) {
                if (sumA == num1 && sumB == 0 || sumA == 0 && sumB == num2) ans++
            } else {
                if (sumB == num1 && sumA == 0 || sumB == 0 && sumA == num2) ans++
            }
        }
    }
    return ans
};

console.log(numberOfAlternatingGroups([0, 1, 0, 0, 1, 0, 1], 6));//3
// console.log(numberOfAlternatingGroups([0, 1, 0, 1, 0], 3));//3