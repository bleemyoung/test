let str = "-123.45";  
// let str = "123.45-67";  
let regex = /^[0-9]+(\.[0-9]+)?$/; // 使用全局标志'g'来匹配所有实例  
let flag=regex.test(str); // 测试是否匹配到数字、小数点或负号  
console.log(flag);