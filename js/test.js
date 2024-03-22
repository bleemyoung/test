// Array.prototype.duplicator = function () {
//     let s = this.concat(this)
//     return s
// }
// let t = [1, 2, 3, 4, 5].duplicator()
// console.log(t)

let str = "310110198211203711"
let res = str.replace(
    /(.{6}).*(.{4})/,
    "$1********$2"
)
console.log(res);