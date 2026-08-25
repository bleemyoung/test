var smallestPalindrome = function(s) {
    const partition = Math.floor(s.length / 2);

    const base = s.substring(0, partition).split("").toSorted();
    const mid = s.length % 2 === 1 ? s[partition] : "";
    const reversed = base.toReversed();

    return base.join("") + mid + reversed.join("");
};

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/smallest-palindromic-rearrangement-i/solutions/4000591/zui-xiao-hui-wen-pai-lie-i-by-leetcode-s-w50b/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// console.log(smallestPalindrome("daccad"));//acddca
// console.log(smallestPalindrome("babac"));//abcba
console.log(smallestPalindrome("yey"));//yey