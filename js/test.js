Array.prototype.duplicator = function () {
    let s = this.concat(this)
    return s
}
let t = [1, 2, 3, 4, 5].duplicator()
console.log(t)