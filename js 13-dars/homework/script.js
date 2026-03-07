var array = ["990000000"];
var a = prompt("telefon numer kiriting");
var b = array.includes(a);


if(b == true){
    var inputpassword = ["1234"];
    var a1 = prompt("sizning telefon raqamingizga qo'ygan kodingizni kiriting");
    var b1 = inputpassword.includes(a1);
    if(b1 == true){
        alert(`to'g'ri kod kiritdingiz
10,000 GB
10,000 Daqiqa
1,000 SMS
            `);
    }else{
        alert("noto'g'ri kod kiritdingiz");
    }
}else{
    alert("not'giri telefon raqam");
}