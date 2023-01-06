// function add_Exclamation(word){
    

//     return word.split('').join('').toUpperCase()+"!"
// }
// console.log(add_Exclamation('paccy is writing codes'))
//whispering function
// function whisper(str){
//     if(str.endsWith("!")){
//         return 'shh...'+ str.slice(0,str.length-1).toLowerCase()
//     }
//     return 'shh... ' + str.toLowerCase()

// }
// console.log(whisper('Abayisenga is a boy !'));
// //alternating caps
// function altCaps(str){
//     let newStr="";
//     for(let i=0;i<str.length;i++){
//         if(i%2==0){
//             newStr +=str[i].toUpperCase();
//         }
//         else{
//             newStr +=str[i]
//         }
//     }
    

//     return newStr;
// }
// console.log(altCaps('Abayisenga aime pacifique'));
//converting first letter to UpperCase
function capitalizeWord(string){

return string[0].toUpperCase()+string.slice(1);
}
console.log(capitalizeWord("abayisenga"))
function ToTitleCase(str){
const split=str.split(' ');
const capArr= split.map(str=>capitalizeWord(str))
return capArr.join(" ");
}
console.log(ToTitleCase("abayisenga is a boy"))