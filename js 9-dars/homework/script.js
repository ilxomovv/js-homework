var input = prompt("Email yoki telefon raqamini kiriting:");

if (input.startsWith("+998")) {
    var operatorCode = input.substring(4, 6);
    var provider = "";

    if (operatorCode === "99" || operatorCode === "95" || operatorCode === "77") {
        provider = "Uztelecom";
    } else if (operatorCode === "90" || operatorCode === "91") {
        provider = "Beeline";
    } else if (operatorCode === "93" || operatorCode === "94") {
        provider = "Ucell";
    } else if (operatorCode === "97" || operatorCode === "88") {
        provider = "Mobiuz";
    } else {
        provider = "Noma'lum operator";
    }

    var formatted = `${input.substring(0, 4)} (${operatorCode}) ${input.substring(6, 9)} ${input.slice(9, 11)} ${input.slice(11, 13)}`;
    console.log(`${formatted} - ${provider}`);

} else {
    var email = input.includes("@") ? input : input + "@gmail.com";
    console.log(email.toLowerCase());
}
