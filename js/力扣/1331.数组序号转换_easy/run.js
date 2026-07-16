/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {

    let arrOld = [...arr]//保存原始数组
    // 如果arrOlde = arr,那么arrOld = arr.sort() = arr
    arr = arr.sort()
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i]
        if (!map.has(num)) {
            map.set(num, map.size+1)
        }
    }
   
    let res = []
    for (let i = 0; i < arrOld.length; i++) {
        let num = arrOld[i]
        res.push(map.get(num))
    }
    return res;
};

console.log(arrayRankTransform([40, 10, 20, 30]));
console.log(arrayRankTransform([100, 100, 100]));//[1,1,1]