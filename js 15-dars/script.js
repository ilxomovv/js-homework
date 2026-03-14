// var avval = new Date("2025-03-10")
// var now = new Date();
// console.log(now.getTime() - avval.getTime())



var tugulgan = prompt("tug'ilgan yil oy sanangizni yozing misol uchun:(yil-oy-sana)").trim();

var b = new Date(tugulgan);
var d = new Date();

var res = (d.getTime() - b.getTime()) / 1000/ 60/ 60/ 24/ 365;
alert(Math.trunc(res));