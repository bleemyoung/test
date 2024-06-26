/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    arr1.sort(sortById)
    arr2.sort(sortById)
    console.log(arr1);
    console.log(arr2);
    let resArr = []
    let i = 0, len = arr1.length
    for (let item of arr2) {
        if (item.id == arr1[i].id) {
            i = i < len - 1 ? i + 1 : i
            resArr.push(item)
        } else if (item.id > arr1[i].id) {
            console.log(i, arr1[i].id);
            while (arr1[i].id < item.id) {
                resArr.push(arr1[i])
                i++
            }
            console.log(i);
        } else {
            resArr.push(item)
        }
    }
    return resArr
};
function sortById(a, b) {
    return a.id - b.id
}

let arr1 = [{ "id": 1, "x": 1 }, { "id": 2, "x": 9 }]
let arr2 = [{ "id": 3, "x": 5 }]
console.log(join(arr1, arr2));

// 错误题解
// https://leetcode.cn/problems/join-two-arrays-by-id/description/
