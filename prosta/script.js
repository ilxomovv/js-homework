// var html = !true;
// var css = true;
// var result = "";

// if(html && css){
//     result = "siz bootstramp kursini boshlashingiz mumkin";
// }else if(html || css){
//     result = "iltimos 2- kursni ham tugating";
// }else{
//     result = "iltimos birinchi ikkkala kursni ham tugating";
// }
// console.log(result);


// var yosh = "23";
// console.log(yosh);
// console.log(Number(yosh));

// console.log(yosh + 1);
// console.log(Number(yosh)+2);

// var name = Yusufjon;
// console.log(Number(name));

// var yil = 2012;
// console.log(yil);
// console.log(String(yil));


// console.log("jizzax shahrida " + 2012 + " yilda tug'ilganman");

// console.log('30' - '10' -5);

//falsy
// console.log(Boolean(false));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(0n));

//truthy
// console.log(Boolean('yusuf'));
// console.log(Boolean(23));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean('0'));
// console.log(Boolean('false'));


// var ism = '';
// if(ism){
//     console.log("ismingiz: " + ism);
// }else{
//     console.log("iltimos ismingizni kiriting");
    
// }

// function meningfunksiyam(son1,son2){
//     return son1 + son2;
// }
// console.log(meningfunksiyam(10,10));
// meningfunksiyam(10,10)
// const result = meningfunksiyam(10,10);
// console.log(result + 10)




// console.log(kvadrat(2));
// function kvadrat(son){
//     return son * son;
// }
// console.log(kvadrat(10))



// kvadrat(2)

// const kvadrat = function(son){
//     return son * son;
// }

// console.log(kvadrat(10))


// const kvadrat = (son) => {
//     return son * son
// }
// console.log(kvadrat(10))



// const kvadrat = (son) => son * son;
// console.log(kvadrat(10))

// const print = () => console.log("printing...");
// print();


// const volume = (a, b, c) => a ** b / c;
// console.log(volume(2,2,2))


// function declaration
// function juftyokitoq(Number1){
//     if(Number1 % 2 === 0){
//         alert(`${Number1} bu son juft son`)
//     }else{
//         alert(`${Number1}bu son toq son`)
//     }
// }
// juftyokitoq(10)


// function expression
// const juftyokitoq = function(number1){
//     if(number1 % 2 === 0){
//         alert(`${number1}bu juft son`);
//     }else{
//         alert(`${number1} bu toq son`);
//     }
// }
// juftyokitoq(5);


//Arrow function
// const juftyokitoq = number1 =>{
//     if(number1 % 2 === 0){
//         alert(`${number1} bu juft`)
//     }else{
//         alert(`${number1} bu toq`)
//     }
// }
// juftyokitoq(10)



// function declaration
// function kattayokikichkina(number1, number2){
//     if(number1 >= number2){
//         return number1
//     }
//     return number2
// }

// alert(kattayokikichkina(5,3))



// function expression
// const kattayokikichkina = function(number1, number2){
//     if(number1 >= number2){
//         return number1
//     }
//     return number2
// }

// console.log(kattayokikichkina(10,14))


//Arrow function
// const kattayokikichkina = (number1, number2) =>{
//     if(number1 >= number2){
//         return number1
//     }
//     return number2
// }

// console.log(kattayokikichkina(10,30))


//sonni chappi qilish


// function declaration
// function reversetext(number){
//     const numberstr = String(number);
//     const anme = numberstr.split('').reverse().join('');
//     return Number(anme)
// }

// console.log(reversetext('yusuf'));





//array//


// const helloarray = ['h', ' e', 'l', 'l', 'o'];
// console.log(helloarray[1]);
// console.log(helloarray[0]);
// console.log(helloarray);

//push//

// var namearray = ["yusufjon"];
// console.log(namearray);
// console.log(namearray.push("ilxomov"));
// console.log(namearray);

//unshift//

// var namee = ["ilxomov"];
// console.log(namee);

// namee.unshift('yusufjon');

// console.log(namee);


//array elementni o'zgartirish//

// var namee = ['java', 'js', 'phyton', 'html'];
// namee[3] = 'bootstramp';
// console.log(namee);


//array elementni o'zchirsh 'pop'//

// var a = ['java', 'js', 'phyton', 'html'];
// var b = a.pop();
// console.log(a);
// console.log(b);

//array elementni boshidan o'chirish 'shift'//

// var a = ['java', 'js', 'phyton', 'html'];
// var b = a.sort();
// console.log(a);
// console.log(b);



//arrayni uzunligini o'lchash "lenght"//

// var a = ['js', 'boolean', 'string'];
// console.log(a.length);



//Array method//

//concat//
// var a = [1,4];
// var g = [6, 3, 7];
// var result = a.concat(g);
// console.log(result);


//find//
// var aa = (number) => number === 2;
// var b = result.find(aa);
// console.log(b);

//filter()//
// var namee = number =>number> 5;
// var filtered = result.filter(namee)
// console.log(filtered);

//map//
// var mapValues = number => 'son: ' + number;
// var mappedValues = result.map(mapValues);
// console.log(mappedValues);


//sort// bu tartiblab beradi misol uchun 3 2 5 1 = 1 2 3 5//
// var sortValues = (number1, number2) => number1 - number2;
// result.sort();
// console.log(result);


//Data type object//
// var dasturchi = {
//     ism: 'Yusufjon',
//     yosh: 13
// }

// console.log(typeof dasturchi);

//kalitni olish object
// var dasturchi = {
//     ism: "Yusufjon",
//     yosh: 13
// }

// console.log(dasturchi.ism);
// //2-usuli
// console.log(dasturchi['yosh']);

//ichma ich object
// var dasturchi = {
//     ism: 'Yusufjon',
//     yosh: 13,
//     manzil: {
//         mamlakat: "Uzbekistan",
//         shahar: "Jizzax",
//         tuman: "Sharof Rashidov"
//     }
// }
// console.log(dasturchi.manzil.mamlakat);

//metod object
// var dasturchi = {
//     ism: "Yusufjon",
//     yosh: 13,
//     salomlashish:function(){
//         console.log("salom");
//     }
// }
// console.log(dasturchi.salomlashish());


//object methods//

//this method
// var dasturchi = {
//     ism: "Yusufjon",
//     familiya: "Ilxomov",

//     salomlashish: function(){
//         console.log("salom mening ismim " + this.ism);
        
//     }
// }

// dasturchi.salomlashish();


//object methods
//!--keys--!//
// var dasturchi = {
//     ism: "Yusufjon",
//     familiya: "Ilxomov"
// }
// console.log(Object.keys(dasturchi));

//!--values--!//
// var dasturchi = {
//     ism: "Yusufjon",
//     familiya: "Ilxomov"
// }
// console.log(Object.values(dasturchi).join(" "));

//!--entiries--!//
// var dasturchi = {
//     ism: "Yusufjon",
//     familiya: "Ilxomov"
// }
// console.log(Object.entries(dasturchi));


//if-else//
//if statement
// var a = 5;
// if(a > 0){
//     alert("5 0 dan katta");
// }else{
//     alert("yolg'on")
// }

//if else statement
// var a = 5;
// if(a > 0){
//     alert("1");
// }else{
//     alert("2")
// }

//if else if statement
// var a = 5;
// if(a > 5){
//     alert("5soni 5 soni dan katta");
// }else if(a === 5){
//     alert("ha");
// }else{
//     alert("hammasi yolg'on");
// }


//switch//
// var num = 2;
// var result;
// switch(num){
//     case 1:
//         result = 'bir';
//     break;
//     case 2:
//         result = 'ikki';
//         break;
//     default:
//         result("topilmadi");
//         break;
// }

// console.log(`qiymat: ${result}`)

//for loop//
// for(var i = 0; i <= 10; i++){
//     console.log(i);    
// }

// var summa = 0;
// for(var i = 0; i <= 10; i++){
//     summa += i
// }
// console.log(`summa: ${summa}`);

// for (var i = 1; i <= 5; i++){
//     if(i === 3){
//         break
//     }
//     console.log(i);
    
// }
for (var i = 1; i <= 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
    
}