var matn = prompt("Biror gap yozing:");

var qidirilayotganHarf = prompt("Qaysi harfni sanaymiz?");

var sanagich = 0;

for (var i = 0; i < matn.length; i++) {
    
    if (matn[i].toLowerCase() === qidirilayotganHarf.toLowerCase()) {
        sanagich++;
    }
}


alert("Siz kiritgan gapda '" + qidirilayotganHarf + "' harfi " + sanagich + " marta qatnashgan.");











