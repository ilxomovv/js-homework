var input = prompt("so'z kiriting misol uchun: kun, oy, yil, soat, haftadan hisoblash, umumiy");

if(input == "kun"){
    var kun = new Date();
    alert("bugun sana " + kun.getDate());
}else if(input == "oy"){
    var oy = new Date();
    alert(oy.getMonth() + "-" + "oy");
}else if(input == "yil"){
    var yil = new Date();
    alert(yil.getFullYear() + "-yil");
}else if(input == "soat"){
    var soat = new Date();
    alert("soat:" + soat.getHours());
}else if(input == "hafta"){
    var hafta = new Date();
    alert("haftadan " + hafta.getDay() + " kun")
}else if(input == "umumiy"){
    var umumiy = new Date();
    alert("umumiy vaqt: " + umumiy);
}else{
    alert("xatolik yuz berdi!");
}