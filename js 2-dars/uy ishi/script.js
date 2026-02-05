var result = prompt("Ismingizni kiriting").trim();
console.log(result);

var age = prompt("yoshingiz") .trim();
if (age > 18 && age < 29) {
    console.log('Yaxshi');
    
    
}else{
    console.log('yoq yoshingiz togri kelmadi');
    
}
var gender = prompt("Jinsingiz"+"1.erkak" + "2.ayol") .trim();
if ( gender < 2) {
    console.log("yaxshi");
    
}else{
    console.log("");
    
}
var borganmisiz = prompt("Avval armiyaga borganmisiz" + "1.ha" + "2.yoq") .trim();
if (borganmisiz < 2) {
    console.log("boshqa kelish ilojisi yo'q");
    
}
else{
    console.log("ha kelishingiz mumkin armiyaga");
    
}