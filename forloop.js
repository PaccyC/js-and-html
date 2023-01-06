let mynumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// for(let i=0;i<mynumber.length;i++){
console.log(mynumber)
// }
// console.log(mynumber)
// for(let j=10;j<=10;j++){
//     console.log("My numbers are");
// }
function calculateSum(a, b) {
    return a + b;

}
console.log(calculateSum(32, 43));
let = calculateSum(32, 43);

let removeVowels = ""
function reverseAString(word) {
    let reversedString = "";
    let removeVowels = "";
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() == 'a' || word[i].toLowerCase() == 'e' || word[i].toLowerCase() == 'i' || word[i].toLowerCase() == 'o' || word[i].toLowerCase() == 'u') {
            continue;
        }
        else {
            removeVowels += word[i];
        }
    }
        for (let i = removeVowels.length - 1; i >= 0; i--) {
            reversedString += removeVowels[i]
        

    }
    return reversedString;
}



console.log(reverseAString(" Pacifique"))
