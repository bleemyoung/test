/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let res = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '*') {
            res.push(s[i]);
        } else {
            res.pop();
        }
    }
    return res.join('');
    // return res.concat('').join('');
};
// var removeStars = function (s) {
//     let res = '';
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] !== '*') {
//             res += s[i];
//         } else {
//             res = res.slice(0, res.length - 1);
//         }
//     }
//     return res;
// };

console.log(removeStars('leet**cod*e'));//输出："lecoe"
console.log(removeStars('erase*****'));//输出："lecoe"