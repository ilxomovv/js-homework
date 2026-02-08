var ism = prompt("Ismingizni kiriting").trim();
console.log("salom" + " " + `${ism}`);
if(ism==""){
    alert("ismingizni kiriting!")

}else if (ism.length <= 3) {
    alert("ism juda kam")

    
}
var nimaga = prompt("nima uchun institutga kirishni xohlaysiz")

console.log(nimaga.replaceAll("universitet", "alicode"));
