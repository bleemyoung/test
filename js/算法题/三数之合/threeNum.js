// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a ，b ，c ，使得 a + b + c = 0 ？请找出所有和为 0 且 不重复 的三元组。
// 用`双端指针`的方式，将三数之和转化为两数之和
function findThree(arr, target) {
    // 先将数组从小到大排序
    arr.sort();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        // 跳过重复的arr[i]值, 比如[2, 1, 1],跳过第二个1
        if (i && arr[i] === arr[i - 1]) continue;
        let left = i + 1;
        let right = arr.length - 1;

        // 双端指针left、right
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                // 先取arr[left]，然后left++, 两步合成一步；arr[right--]同样的逻辑
                result.push([arr[i], arr[left++], arr[right--]]);
                while (arr[left] === arr[left - 1]) {
                    // 跳过重复的arr[left]值,
                    left++;
                }
                while (arr[right] === arr[right + 1]) {
                    // 跳过重复的arr[right]值
                    right--;
                }
            }
        }
    }
    return result;
}


// 测试用例
console.log(findThree([-1, 0, 1, 2, -1, -4], 0));
// console.log(findThree([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // [[1, 2, 7], [1, 3, 6], [1, 4, 5], [2, 3, 5], [2, 4, 4], [3, 4, 3]]
// console.log(findThree([1, 2, 3, 4, 5, 6, 7, 8, 9], 12)); // [[1, 2, 9], [1, 3, 8], [1, 4, 7], [1, 5, 6], [2, 3, 7], [2, 4, 6], [2, 5, 5], [3, 4, 5], [3, 5, 4], [4, 5, 3]]
// https://leetcode.cn/problems/1fGaJU/description/