var soz = prompt("Biror so'z kiriting:");
var teskariSoz = "";


for (var i = soz.length - 1; i >= 0; i--) {
    teskariSoz += soz[i];
}

alert("Chappasiga: " + teskariSoz);
