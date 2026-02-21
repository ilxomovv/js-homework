var son1 = +prompt("1-sonni kirirting").trim();
var result
var amal = prompt("Amalni kiriting (+ yoki -):");
var son2 = +prompt("2-sonni kiriting").trim();

switch(amal){
    case (`-`):
        alert(son1 - son2);
        break;
    case (`+`):
        alert(son1 + son2);
        break;
    case (`/`):
        alert(son1 / son2);
        break;
    case (`*`):
        alert(son1 * son2);
        break;

    default:
        alert(`2`)
}