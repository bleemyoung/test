

// let regex =/(^\d*\.?\d{1,6}$)/
// let str='1.123456'
// console.log(regex.test(str));

// let regex =/^\d*\.?\d+$/
// let regex = /^(\d+,\d+)$/;
let regex = /^(\d+(\.\d{1,6})?),\d+(\.\d{1,6})?$/;
let str = '123.456,789.123456';
console.log(regex.test(str));