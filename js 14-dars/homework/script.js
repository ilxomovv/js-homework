var kiritilgan = prompt("So'zlar yoki sonlarni bo'sh joy tashlab yozing:"); 
var tartib = prompt("Tartiblash turi: 'a-z' yoki 'z-a'");

var massiv = kiritilgan.split(' ');

massiv.sort();

if (tartib === 'z-a') {
    massiv.reverse();
}

var natija = massiv.join(' ');
alert("Natija: " + natija);
