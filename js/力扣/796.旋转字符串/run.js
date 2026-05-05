/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    const n = s.length
    if (n !== goal.length) return false
    for (let i = 0; i < n; i++) {
        let left = s.slice(0, i)
        let right = s.slice(i, n)
        // console.log(left, right);
        let temp = right + left
        // console.log(temp);
        if (temp === goal) return true
    }
    return false
};

console.log(rotateString('abcde', 'bcdea'));