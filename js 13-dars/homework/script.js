var array = ["990000000"];
var a = prompt("telefon numer kiriting");
var b = array.includes(a);


if(b == true){
    alert("siz ro'yxatdan o'tgansiz")
}else if(b == false){
    alert("siz ro'yxatdan o'tmagansiz");
    var inp = prompt("sizni topa olmadik siz endi yangi parol yozing");
}