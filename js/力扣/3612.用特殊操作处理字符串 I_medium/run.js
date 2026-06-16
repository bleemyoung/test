/**
 * @param {string} s
 * @return {string}
 */
var processStr = function (s) {
    let res = []
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '*':
                res.pop()
                break;
            case '%':
                res.reverse()
                break;
            case '#':
                res = res.concat(res)
                break;
            default:
                res.push(s[i])
                break;
        }
    }
    return res.join('');
};

// console.log(processStr("abc")); // "abc"
console.log(processStr("a#b%*")); // "ba"