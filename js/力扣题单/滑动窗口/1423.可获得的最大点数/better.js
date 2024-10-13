/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let n = cardPoints.length;
    let index = n - k
    // if (n >= 2 * k) {
    //     index = n - k;
    // } else {
    //     index = k
    // }
    console.log(index);
    let leftArr = cardPoints.slice(index, n);
    let rightArr = cardPoints.slice(0, k);
    console.log(leftArr);
    console.log(rightArr);
    let arr = leftArr.concat(rightArr);
    const findMax = (arr) => {
        let left = 0
        let sum = 0
        let max = 0
        for (let right = 0; right < arr.length; right++) {
            while (right - left + 1 > k) {
                sum -= arr[left]
                left += 1
            }
            sum += arr[right]
            if (right - left + 1 === k) {
                max = Math.max(max, sum)
            }
        }
        return max
    }
    return findMax(arr)
};

console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));//12