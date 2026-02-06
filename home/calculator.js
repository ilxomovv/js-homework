alert("Bu Kalkulator")
var son1 = prompt("Birinchi sonni kiriting:");
var son2 = prompt("Ikkinchi sonni kiriting:");
var amal = prompt("Amalni kiriting (+ yoki -):");

son1 = Number(son1);
son2 = Number(son2);

if (amal == "+") {
  alert("Natija: " + (son1 + son2));
  console.log("Natija: " + (son1 + son2));
} else if (amal == "-") {
  alert(`Natija: ${son1 - son2}`);
  console.log(`Natija: ${son1 - son2}`);
} else {
  alert("Xato! Faqat + yoki - kiriting");
  console.log("Xato! Faqat + yoki - kiriting");
}
