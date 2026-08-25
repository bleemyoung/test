/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    if(n === 0) return 0;
    const arr = n.toString().split('');
    const sum = arr.reduce((acc, cur) => acc + parseInt(cur), 0);
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== '0') {
            temp.push(arr[i]);
        }
    }
    const x = parseInt(temp.join(''));
    // console.log(sum, x);
    return x * sum;
};

console.log(sumAndMultiply(10203004));


// 给你一个整数 n。
// 将 n 中所有的 非零数字 按照它们的原始顺序连接起来，形成一个新的整数 x。如果不存在 非零数字 ，则 x = 0。
// sum 为 x 中所有数字的 数字和 。
// 返回一个整数，表示 x * sum 的值。