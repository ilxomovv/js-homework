// console.log(Math.round(4.8));  // Yaxlitlash

// console.log(Math.ceil(4.2));  //ko'taradi

// console.log(Math.floor(4.9)); //pastga tushiradi

// console.log(Math.trunc(3.23139029301293));  //nuqtadan keyingisini olib beradi

// console.log(Math.sign(-4)); //pasaytiradi misol 4 / 1 -4 / -1

// console.log(Math.pow(8, 2)); //darajasi

// console.log(Math.trunc(Math.random() * 10)); //random


// var input = prompt("son kiriting");
// var a = Math.trunc((Math.random() * 20));
// if(input == a){
//     alert("siz go'libsiz");
// }else{
//     alert("siz yutqazdengiz");
// }
// alert("siz kiritgan soningiz " + input);
// alert("randomni son " + a);

var arr = ["tosh", "qaychi", "qog'oz"];
var user = prompt("so'z kiriting tosh qaychi qog'oz");
var random = Math.trunc(Math.random() * arr.length);

if(arr = random){
    alert("siz yutdingiz");
}else{
    alert("siz yutqizdengiz")
}
alert("siz kiritdingiz " + user);
alert("bu kompyuter tomonidan kiritilgan" + random);