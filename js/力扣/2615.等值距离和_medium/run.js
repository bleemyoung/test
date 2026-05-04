/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
    var map = new Map()
    const n = nums.length
    var ans = new Array(n).fill(0)
    for (let i = 0; i < n; i++) {
        let num = nums[i]
        if (map.get(num)) {
            let arr = map.get(num)
            arr.push(i)
            map.set(num, arr)
        } else {
            map.set(num, [i])
        }
    }
    map.forEach(value => {
        let len = value.length
        for (let i = 0; i < len; i++) {
            let cal = 0
            let index1 = value[i]
            for (let j = 0; j < len; j++) {
                if (i !== j)
                    cal += Math.abs(value[j] - index1)
            }
            ans[index1] = cal
        }
    })
    // console.log(map)
    return ans
};
console.log(distance([1, 3, 1, 1, 2]));//[5,0,3,4,0]