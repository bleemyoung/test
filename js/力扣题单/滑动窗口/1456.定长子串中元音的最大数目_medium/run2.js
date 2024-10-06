/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const isPrime = (val) => {
        if (val == 'a' || val == 'e' || val == 'i' || val == 'o' || val == 'u') {
            return true
        }
        return false
    }
    let n = s.length
    let res = -1, last
    for (let i = 0; i <= n - k; i++) {
        let sum
        if (i === 0) {
            sum = 0
            for (let j = 0; j < k; j++) {
                if (isPrime(s[j])) sum++
            }
        } else {
            sum = last
            if (isPrime(s[i - 1])) sum--
            if (isPrime(s[i + k - 1])) sum++
        }
        last = sum
        res = res > sum ? res : sum
    }
    return res
};

console.log(maxVowels("abciiidef", 3));//3
console.log(maxVowels("aeiou", 2));//2