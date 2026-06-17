function processStr(s, k) {
    let len = 0;
    for (const c of s) {
        if (c === '*') {
            if (len > 0) {
                len--;
            }
        } else if (c === '#') {
            len *= 2;
        } else if (c === '%') {
            // no change
        } else {
            len++;
        }
    }
    if (k + 1 > len) {
        return '.';
    }
    for (let i = s.length - 1; i >= 0; i--) {
        const c = s[i];
        if (c === '*') {
            len++;
        } else if (c === '#') {
            if (k + 1 > (len + 1) / 2) {
                k -= Math.floor(len / 2);
            }
            len = Math.floor((len + 1) / 2);
        } else if (c === '%') {
            k = len - k - 1;
        } else {
            if (k + 1 === len) {
                return c;
            }
            len--;
        }
    }
    return '.';
}


console.log(processStr('cd%#*#'))
// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/process-string-with-special-operations-ii/solutions/3979302/yong-te-shu-cao-zuo-chu-li-zi-fu-chuan-i-jpwb/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。