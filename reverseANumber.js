// //this is a program to reverse a given number
function reverseAnumber(x){
let y =String(x).split("");
let reversedNumber = ""
for(let i =y.length-1;i>=0;i--){
    reversedNumber +=y[i];
    
}
return reversedNumber ;

}
console.log(reverseAnumber(-345656));

// const number = 32456;
// console.log(String(number).split(''));