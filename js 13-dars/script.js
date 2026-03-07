var array = ["1", "18"];
var a = prompt("0dan 20gacha bo'lgan sonlar ichidan son yozing");
var b = array.includes(a);
if (b == true) {
  console.log("Siz G'olibsiz!!!!!");
} else if (b == false) {
  console.log("Siz yutqazdingiz yana qaytadan uruning");
}