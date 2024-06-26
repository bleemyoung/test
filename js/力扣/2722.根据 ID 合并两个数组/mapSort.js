function join(arr1, arr2) {
    const map = new Map()
    for (const item of arr1) {
        map.set(item.id, { ...map.get(item.id), ...item })
    }
    for (const item of arr2) {
        map.set(item.id, { ...map.get(item.id), ...item })
    }
    let arr = [...map.values()].sort((a, b) => a.id - b.id)//转换成数组，排序
    return arr
}
let arr1 = [{ "id": 1, "x": 1 }, { "id": 2, "x": 9 }]
let arr2 = [{ "id": 3, "x": 5 }]
console.log(join(arr1, arr2));
// console.log({a:1,a:2,b:3});//例子，对象赋值的时候多个同名字段，取最后一个