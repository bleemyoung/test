/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const isVowel = (val) => {
        if (val == 'a' || val == 'e' || val == 'i' || val == 'o' || val == 'u') {
            return true
        }
        return false
    }
    // const isVowel = (c) => /[aeiou]/i.test(c);
    let count = 0;
    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) {
            count++;
        }
    }
    // console.log(count);
    let max = count;
    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i])) {
            count++;
        }
        if (isVowel(s[i - k])) {
            count--;
        }
        max = max > count ? max : count
    }
    return max;
};

console.log(maxVowels("abciiidef", 3));//3
console.log(maxVowels("aeiou", 2));//2