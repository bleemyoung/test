// https://blog.csdn.net/weixin_42981560/article/details/127564014
function versionSort(arr) {
    return arr.sort((a, b) => {
        let i = 0;
        const arr1 = a.split(".");
        const arr2 = b.split(".");
        while (true) {
            // 取出相同位置的数字
            const s1 = arr1[i];
            const s2 = arr2[i];
            i++;
            // 若s1 或 s2 不存在，说明相同的位置已比较完成，接下来比较arr1 与 arr2的长度，长的版本号大
            if (s1 === undefined || s2 === undefined) {
                return arr2.length - arr1.length;
            }
            if (s1 === s2) continue;
            // 比较相同位置的数字大小
            return s2 - s1;
        }
    });
}


// 测试用例
console.log(versionSort(["1.11", "2.0.0", "1.2", "2.0", "1.12"])); // [ '2.0.0', '2.0', '1.12', '1.11', '1.2' ]
console.log(versionSort(["1.01", "1.0", "1.3", "1.0.1", "1.0.0"])); // [ '1.3', '1.01', '1.0.1', '1.0.0', '1.0' ]
