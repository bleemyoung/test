// Array.prototype.duplicator = function () {
//     let s = this.concat(this)
//     return s
// }
// let t = [1, 2, 3, 4, 5].duplicator()
// console.log(t)

// let str = "310110198211203711"
// let res = str.replace(
//     /(.{6}).*(.{4})/,
//     "$1********$2"
// )
// console.log(res);

/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function (mainTank, additionalTank) {

    if (mainTank < 5) {
        return mainTank * 10
    } else {
        let res = 0
        for (; mainTank >= 5 && additionalTank >= 1; mainTank -= 5) {
            additionalTank--
            mainTank++
            res += 50
        }
        // while(mainTank >= 5){
        //     mainTank -= 5
        //     additionalTank--
        //     mainTank++
        //     res += 50
        // }
        // console.log(mainTank);
        res += mainTank * 10
        return res
    }

};
console.log(distanceTraveled(5, 10));
// https://leetcode.cn/problems/total-distance-traveled/description/

