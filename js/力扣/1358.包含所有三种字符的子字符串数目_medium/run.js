var numberOfSubstrings = function(s) {
    const ordA = 'a'.charCodeAt(0);
    const cnt = Array(3).fill(0);
    let ans = 0, left = 0;
    for (let right = 0; right < s.length; right++) {
        cnt[s.charCodeAt(right) - ordA]++;
        while (cnt[0] > 0 && cnt[1] > 0 && cnt[2] > 0) {
            cnt[s.charCodeAt(left) - ordA]--;
            left++;
        }
        ans += left;
    }
    return ans;
};

console.log(numberOfSubstrings('abcabc')); // 10
// 作者：灵茶山艾府
// 链接：https://leetcode.cn/problems/number-of-substrings-containing-all-three-characters/solutions/2990226/mo-ban-yue-chang-yue-he-fa-xing-hua-dong-2g7a/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


// https://leetcode.cn/problems/number-of-substrings-containing-all-three-characters/solutions/109170/bao-han-suo-you-san-chong-zi-fu-de-zi-zi-fu-chuan/?envType=daily-question&envId=2026-06-30