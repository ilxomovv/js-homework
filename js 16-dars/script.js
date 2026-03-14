// var result = document.getElementById("res");

// function show() {
//   for (let i = 0; i < 5; i++) {
//     result.innerHTML += `<h1>${i}</h1>`;
//   }
// }



// var inn = document.getElementById("ooo");
// function ii() {
//     // for (let i = 0; i < 5; i++) {
//     //     inn.innerHTML += `<h1>${i}</h1>`;
        
//     // }

//     // alert("oooooooo nima gappp nima bo'vottttttttttt")

//     inn.innerHTML = new Date();
// }   





function kalkulator (son1, son2, amal){
    if(amal === "+"){
        return son1 + son2;
    }else if(amal === "-"){
        return son1 - son2;
    }else if(amal === "*"){
        return son1 * son2;
    }else if(amal === "/"){
        return son1 / son2;
    }else{
        alert("xatolik");
    }
}
    var son1 = +prompt("son kiriting");
    var amal = prompt("amal kiriting (/; *; +; -");
    var son2 = +prompt("2-sonni kiriting");

var natija = kalkulator(son1, son2, amal);
alert(natija);