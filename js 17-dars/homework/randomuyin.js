var gameInput = prompt("o'yin nomini kiritin u o'yinga men unga random narsa tanlab beraman misol uchun o'yinlar: CS 1.6, Pubg mobile, Spicial Forges Group 2");
var gameNameArr = ["CS 1.6", "Pubg mobile", "Spicial Forges Group 2"];
var gameB = gameNameArr.includes(gameInput);
if(gameB === true || gameNameArr == "CS 1.6"){
    var gameRandomArr = ["Deagle", "P90", "Ump45", "awp", "ak47", "Smg", "uzi", "Galil", "scout", "krieg 552", "m249", "granata", "pichoq", "usp"];
    var randomGameName = Math.trunc((Math.random() * gameRandomArr.length));
    if(randomGameName == 1){
        console.log("Deagle");
    }else if(randomGameName == 2){
        console.log("P90");
    }else if(randomGameName == 3){
        console.log("Ump45");
    }else if(randomGameName == 4){
        console.log("awp");
    }else if(randomGameName == 5){
        console.log("ak47");
    }else if(randomGameName == 6){
        console.log("Smg");
    }else if(randomGameName == 7){
        console.log("uzi");
    }else if(randomGameName == 8){
        console.log("galil");
    }else if(randomGameName == 9){
        console.log("Scout");
    }else if(randomGameName == 10){
        console.log("krieg 552");
    }else if(randomGameName == 11){
        console.log("m249");
    }else if(randomGameName == 12){
        console.log("granata");
    }else if(randomGameName == 13){
        console.log("pichoq");
    }else if(randomGameName == 14){
        console.log("usp");
    }
}else if(gameNameArr == "Pubg mobile"){
    var gameRandomArr2 = ["Deagle", "P90", "Ump45", "awm", "ak47", "Smg", "uzi", "m4a1", "m24", "karyak", "m249", "granata", "pichoq", "usp", "m416"];
    var randomGameName2 = Math.trunc((Math.random() * gameRandomArr2.length));
    if(randomGameName2 == 1){
        console.log("Deagle");
    }else if(randomGameName2 == 2){
        console.log("P90");
    }else if(randomGameName2 == 3){
        console.log("Ump45");
    }else if(randomGameName2 == 4){
        console.log("awm");
    }else if(randomGameName2 == 5){
        console.log("ak47");
    }else if(randomGameName2 == 6){
        console.log("Smg");
    }else if(randomGameName2 == 7){
        console.log("uzi");
    }else if(randomGameName2 == 8){
        console.log("m4a1");
    }else if(randomGameName2 == 9){
        console.log("m24");
    }else if(randomGameName2 == 10){
        console.log("karyak");
    }else if(randomGameName2 == 11){
        console.log("m249");
    }else if(randomGameName2 == 12){
        console.log("granata");
    }else if(randomGameName2 == 13){
        console.log("pichoq");
    }else if(randomGameName2 == 14){
        console.log("usp");
    }else if(randomGameName2 == 15){
        console.log("M416");
    }
}else if(gameNameArr == "Spicial Forges Group 2"){
    var gameRandomArr3 = ["Deagle", "P90", "Ump45", "awm", "ak47", "Smg", "uzi", "m4a1", "m24", "karyak", "m249", "granata", "pichoq", "usp"];
    var randomGameName3 = Math.trunc((Math.random() * gameRandomArr3.length));
    if(randomGameName3 == 1){
        console.log("Deagle");
    }else if(randomGameName3 == 2){
        console.log("P90");
    }else if(randomGameName3 == 3){
        console.log("Ump45");
    }else if(randomGameName3 == 4){
        console.log("awm");
    }else if(randomGameName3 == 5){
        console.log("ak47");
    }else if(randomGameName3 == 6){
        console.log("Smg");
    }else if(randomGameName3 == 7){
        console.log("uzi");
    }else if(randomGameName3 == 8){
        console.log("m4a1");
    }else if(randomGameName3 == 9){
        console.log("m24");
    }else if(randomGameName3 == 10){
        console.log("karyak");
    }else if(randomGameName3 == 11){
        console.log("m249");
    }else if(randomGameName3 == 12){
        console.log("granata");
    }else if(randomGameName3 == 13){
        console.log("pichoq");
    }else if(randomGameName3 == 14){
        console.log("usp");
    }
}else{
    alert("noto'g'ri ketdi");
}