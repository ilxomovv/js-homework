var yonalishlar = ["Shimol", "Sharq", "Janub", "G'arb"];
var bek = 0;

for (var i = 0; i < yonalishlar.length; i++) {
    var h = parseFloat(prompt(`${yonalishlar[i]} tomondagi devor balandligi `)) || 0;
    
    var l = parseFloat(prompt(`${yonalishlar[i]} tomondagi devor uzunligi`)) || 0;

    bek += (h * l);
}

var w = parseInt(prompt("Xonada nechta deraza bor")) || 0 .trim();
var ww = 0;

for (var i = 1; i <= w; i++) {
    var dH = parseFloat(prompt(`${i}-deraza balandligi`)) || 0;

    var dL = parseFloat(prompt(`${i}-deraza uzunligi`)) || 0;
    ww += (dH * dL);
}

var mers = parseInt(prompt("Xonada nechta eshik bor?")) || 0 .trim();
var bmw = 0;

for (var i = 1; i <= mers; i++) {
    var eH = parseFloat(prompt(`${i}-eshik balandligi`)) || 0;

    var eL = parseFloat(prompt(`${i}-eshik uzunligi`)) || 0;
    bmw += (eH * eL);
}

var sof = bek - (ww + bmw);
console.log(
    " YUZA " + sof.toFixed(2) + " kv.m");