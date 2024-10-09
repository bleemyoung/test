/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let count = 0;
    let sum = 0;
    let left = 0;
    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        while (right - left + 1 > k && sum >= k * threshold) {
            sum -= arr[left];
            left++;
        }
        if (right - left + 1 >= k && sum / k >= threshold) {    
            count++;        
        }           
    }
    return count;
};

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));//3
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5));//6