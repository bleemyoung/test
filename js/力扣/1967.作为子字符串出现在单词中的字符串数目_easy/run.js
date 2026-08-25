/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
    let set = new Set();
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        for (let j = i; j < word.length; j++) {
            let str = word.substring(i, j + 1);
            if (!set.has(str)) {
                set.add(str);
            }
        }
    }
    for(let str of patterns){
        if(set.has(str)){
            count++;
        }
        // console.log(set);
    }
    console.log(set);
    return count;
};

console.log(numOfStrings(["a","abc","bc","d"], "abc")); // 3 
// console.log(numOfStrings(["a", "b", "c"], "aaaaabbbbb")); // 2
