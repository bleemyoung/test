// // var timestamp = "2024-3-31"
// var timestamp = "1711900800000"

// var newDate = new Date();

// newDate.setTime(timestamp * 1000);
// console.log(newDate.toLocaleDateString().replace(/\//g, "-"));
// // Mon May 28 2018
// console.log(newDate.toDateString());

var timestamp = "1711900800000"
// var timestamp = "2024-3-31"
var newDate = new Date()
newDate.setTime(timestamp);

this.year = newDate.getFullYear()
this.month = newDate.getMonth()
this.date = newDate.getDate()

console.log(newDate, this.year, this.month, this.date);