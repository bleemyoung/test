// padStart() 方法用另一个字符串填充当前字符串（如果需要会重复填充），直到达到给定的长度。填充是从当前字符串的开头开始的。
// padStart(targetLength)
// padStart(targetLength, padString)

// 字符加密
const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);//5581
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");
console.log(maskedNumber); // Output: "************5581"

// 只传参targetLength
console.log("abc".padStart(10)); // "       abc");