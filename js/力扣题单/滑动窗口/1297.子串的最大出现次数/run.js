/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
    let freq = {};
    let map = new Map();
    let left = 0;
    let count = 0;
    let maxCount = 0;
    for (let right = 0; right < s.length; right++) {
        while (right - left + 1 > minSize) {
            let str = s[left];
            if (map.get(str) === 1) {
                count--;
                map.delete(str);
            } else {
                map.set(str, map.get(str) - 1);
            }
            left++;
        }
        let c = s[right];
        if (map.has(c)) {
            map.set(c, map.get(c) + 1);
        } else {
            count++;
            map.set(c, 1);
        }
        if (right - left + 1 == minSize && count <= maxLetters) {
            let sub = s.slice(left, right + 1);
            // console.log(sub);
            if (freq.hasOwnProperty(sub)) {
                freq[sub]++;
            } else {
                freq[sub] = 1;
            }
        }
    }
    console.log(freq);
    for (let sub in freq) {
        if (freq[sub] > maxCount) {
            maxCount = freq[sub];
        }
    }
    return maxCount;
};

console.log(maxFreq("aabcabcab", 2, 2, 3));//3
// console.log(maxFreq("aaaa", 1, 3, 3));//2
// console.log(maxFreq("abcde", 2, 3, 3));//0