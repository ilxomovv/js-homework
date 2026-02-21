
var input = prompt("Misolni kiriting (masalan: 10 + 5):");

var qismlar = input.split(" ");

var son1 = Number(qismlar[0]);
var amal = qismlar[1];
var son2 = Number(qismlar[2]);

var natija;


switch (amal) {
    case "+":
        natija = son1 + son2;
        break;
    case "-":
        natija = son1 - son2;
        break;
    case "*":
        natija = son1 * son2;
        break;
    case "/":
        if (son2 === 0) {
            natija = "Nolga bo'lish mumkin emas!";
        } else {
            natija = son1 / son2;
        }
        break;
    default:
        natija = "Noma'lum amal kiritildi!";
}


alert("Natija: " + natija);
