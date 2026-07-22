from typing import List

DIGITS = "123456789"

class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]:
        ans = []
        # 枚举 DIGITS 的子串（先枚举子串长度，再枚举子串位置）
        for length in range(len(str(low)), len(str(high)) + 1):
            for r in range(length, len(DIGITS) + 1):
                # range(length, len(DIGITS) + 1) 的结束值是开区间，所以 r 实际取到的最大值是 len(DIGITS) = 9，不是 10。
                x = int(DIGITS[r - length: r])
                if low <= x <= high:
                    ans.append(x)
        return ans

print(Solution().sequentialDigits(100, 300))
# 作者：灵茶山艾府
# 链接：https://leetcode.cn/problems/sequential-digits/solutions/3989658/liang-chong-fang-fa-mei-ju-zi-chuan-ding-jxk5/
# 来源：力扣（LeetCode）
# 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 当 r = 9 时，切片 DIGITS[9 - length : 9] 取到字符串最后 length 个字符（"56789" 等），这是合法的，因为 DIGITS 的索引范围是 0~8，切片结束索引 9 是允许的（Python 切片结束索引可以等于长度，表示取到末尾）。