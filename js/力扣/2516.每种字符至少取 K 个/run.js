/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
    const cnt = [0, 0, 0];
    const len = s.length;
    let ans = len;
    for (let i = 0; i < len; i++) {
        cnt[s.charCodeAt(i) - 97]++;
    }
    if (cnt[0] < k || cnt[1] < k || cnt[2] < k) {
        return -1;
    }
    ans = Math.min(ans, len);
    let l = 0;
    for (let r = 0; r < len; r++) {
        cnt[s.charCodeAt(r) - 97]--;
        while (l < r && (cnt[0] < k || cnt[1] < k || cnt[2] < k)) {
            cnt[s.charCodeAt(l) - 97]++;
            l++;
        }
        if (cnt[0] >= k && cnt[1] >= k && cnt[2] >= k) {
            ans = Math.min(ans, len - (r - l + 1));
        }
    }
    return ans;
};

console.log(takeCharacters("aabaaaacaabc", 2));