function longestWord(a){
let myArray=a.split(" ")
let maxLength = 0;
let maxWord ;
for(let y=0;y<myArray.length;y++){
    if(myArray[y].length>maxLength){
        maxLength = myArray[y].length;
        maxWord= myArray[y];
    }
}
return maxWord;
}
console.log("The longest is:",longestWord("Aime Pacifique"))
