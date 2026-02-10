var ism = prompt("Ismingizni kiriting").trim();
console.log("salom" + " " + `${ism}` + " " + "yaxshimisiz");
if(ism==""){
    alert("ismingizni kiriting!")
    var ism = prompt("Ismingizni kiriting").trim();
    console.log("ismingizni kiritmagansiz");
    
}else if (ism.length <= 3) {
    alert("ism juda kam")

    var ism = prompt("Ismingizni kiriting").trim();
}
var nimaga = prompt("nima uchun institutga kirishni xohlaysiz")

if(nimaga.length <=10) {
    alert("Siz kam malumot kiritdingiz, 10ta harfdan ko'p bo'lsin")
    

    console.log("siz nima uchun institutga kirishni xohganingizni yozmadingiz");
    
}else{
    alert("raxmat😉")
}
console.log(nimaga.replaceAll("universitet", "alicode"));
