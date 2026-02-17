let word = prompt("So'z kiriting:");
let counts = {};
                                                                 
for (let i = 0; i < word.length; i++) {
    let char = word[i];
    counts[char] = (counts[char] || 0) + 1;
}

let keys = Object.keys(counts);

let result = "";
for (let j = 0; j < keys.length; j++) {
    let harf = keys[j];
    let soni = counts[harf];
    result += harf + "-" + soni + " ";
}

alert(result);
