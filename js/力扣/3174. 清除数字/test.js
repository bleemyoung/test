/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let res = "";
    let charList = []
    for (let i = 0; i < s.length; i++) {
        if (!/\d/.test(s[i])) {
            charList.push(s[i]);
        }else{
            if(charList.length>0){
                charList.pop()
            }
        }
    }
    // console.log("charList",charList);
    for(let i=0;i<charList.length;i++){
        res+=charList[i]
    }
    return res
}
// https://leetcode.cn/problems/clear-digits/
// 给你一个字符串 s 。
// 你的任务是重复以下操作删除 所有 数字字符：
// 删除 第一个数字字符 以及它左边 最近 的 非数字 字符。
// 请你返回删除所有数字字符以后剩下的字符串。
console.log(clearDigits('abc'));//"abc"
console.log(clearDigits('cb34'));//""
console.log(clearDigits('abcd34'));//"ab"