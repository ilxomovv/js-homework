var input = prompt("so'z kiriting virgul bilan");

if (input){
    var cleanText = input.replaceAll(" ", "");
    var wordsArray = cleanText.split(",");
    var result = "";
    for(var i = 0; i < wordsArray.length; i++){
        var currentWord = wordsArray[i];
        switch (typeof currentWord) {
            case "string":
                result = result + currentWord + " \n "; 
                break;
        }
    }
}
alert(result)