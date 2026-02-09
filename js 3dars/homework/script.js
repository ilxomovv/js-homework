var ism = prompt("Ismingizni kiriting").trim();
console.log("salom" + " " + `${ism}` + " " + "yaxshimisiz");
if(ism==""){
    alert("ismingizni kiriting!")

}else if (ism.length <= 3) {
    alert("ism juda kam")

    
}
var nimaga = prompt("nima uchun institutga kirishni xohlaysiz")

if(nimaga.length <=10) {
    alert("Siz kam malumot kiritdingiz, 10ta harfdan ko'p bo'lsin")
}else{
    alert("raxmat😉")
}
console.log(nimaga.replaceAll("universitet", "alicode"));
