var boysAndGirls = [];

function arraymetodlaridan(){
    var amal = prompt(`
|        
|       
|       
|       
|       
array metodlaridan kiriting (misol uchun:push, pop, unshift, shift, toString, join`);
    if(amal === 'stop'){
        console.log("dastur tugadi");
        return;
    }

    if(amal === 'push' || amal === 'unshift'){
        var inson = prompt(`${amal} qilish uchun metot kiriting nomini kiriting:`);
        if(inson === 'push') boysAndGirls.push(inson);
        else boysAndGirls.unshift(inson);
        console.log(`yangi ro'yxat`, boysAndGirls);
    }
    else if(amal === 'pop'){
        var ochiradi = boysAndGirls.pop();
        console.log(`oxiridan ${ochiradi} o'chirildi hozzirgi holati:`, boysAndGirls);     
    }
    else if(amal === 'shift'){
        var oldidanochiradi = boysAndGirls.shift();
        console.log(`boshidan ${oldidanochiradi} o'chirildi hozzirgi holat:${boysAndGirls}`);
    }
    else if(amal === 'unshift'){
        var oldidanqoshadi = boysAndGirls.unshift();
        console.log(`boshiga ${oldidanqoshadi} qo'shadi hozzirgi holat:${boysAndGirls}`);
    }
    else if(amal === 'concat'){
        var nusxayaratish = boysAndGirls.concat();
        console.log(`oxiriga ${nusxayaratish} nusxa qo'shadi holat: ${boysAndGirls}`);
    }
    else if (amal === 'join') {
        var joinqilamiz = boysAndGirls.join();
        console.log("Join natijasi:", boysAndGirls.join(" - "));
    } 
    else if (amal === 'tostring') {
        var stringgaaylantr = boysAndGirls.toString()
        console.log("toString natijasi:", boysAndGirls.toString());
    }else{
        console.log("bunday buyruq yo'q");
    } 
    
}

arraymetodlaridan(boysAndGirls);
