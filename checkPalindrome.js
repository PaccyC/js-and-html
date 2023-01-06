// function checkPalin(word){
//     var n=word.length
//     word =word.toLowerCase();
//     for(var i=0;i<n;i++,n--){
//         if(word[i] !=word[n-1]){
//             return false;
//         }
//         return true;
//     }
//     return word;
// }

// function countPalin(str){
//     str = str + " ";
//     var word = "";
//     var count = 0;
//     for(var i=0;i<str.length;i++){
//         var ch=str[i];
//         if(ch != ' '){
//             count++;
//             word ="";
//         }
//     }
//     return count;
// }
function reverseMyword (word){
    let myWord = ""

    for(let i=word.length-1;i>=0;i--){
        myWord += word[i]; 
    }

    if(myWord == word){
        return true;
    } else {
        return false
    }

}

console.log(reverseMyword("paccy"));
console.log(reverseMyword("nursesrun"))
// the program to find the power of a given number
function getThePowerOfNumber(num1,n){

return num1**n
}
console.log(getThePowerOfNumber(200,0))
var exponent=function(a,n){
    if(n===0){
        return 1;
    }
    else{
        return a * exponent(a,n-1);

    }
    
}
 console.log(exponent(1,0));
let x=Math.pow(3,3)
console.log(x)
//A program to sort the numbers of an array  in descending order 
var marks = [12, 25, 31, 23, 75, 81, 100];
console.log("Original Array"); 
    console.log(marks); 
    marks.sort(function(a, b){return a - b});
      
    console.log("After sorting in Ascending order"); 
    console.log(marks);
    var marks = [12, 25, 31, 23, 75, 81, 100];
console.log("Original Array"); 
    console.log(marks); 
    marks.sort(function(a, b){return b - a});
      
    console.log("After sorting in descending order"); 
    console.log(marks);
    //unreapeted  algorithm
    // function unreapetedCharacter(word){
    //     let x=word.split(" ");
    //     let y = x.count()
    //     if(y===1){
    //         return y;
    //     }
    //     else{
    //         return word;
    //     }
    
        
    // }
    // console.log(unreapetedCharacter(ppaccyy))

    //longest word in the sentence
    function getLongestNames(a){
        let x= a.split(" ");
        let z=0
        let y;
        for(let i=0;i<x.length;i++){
            if(x[i].length>z){
                z=x[i].length;
                y=x[i];

            }
        }
        return y
    }
    console.log("the longest word is",getLongestNames("pacifique AbayisengaAimePacifique"))
    //all combinations of the word
    function substrings(str1)
{
var array1 = [];
  for (var x = 0, y=1; x < str1.length; x++,y++) 
  {
   array1[x]=str1.substring(x, y);
    }
var combi = [];
var temp= "";
var slent = Math.pow(2, array1.length);

for (var i = 0; i < slent ; i++)
{
    temp= "";
    for (var j=0;j<array1.length;j++) {
        if ((i & Math.pow(2,j))){ 
            temp += array1[j];
        }
    }
    if (temp !== "")
    {
        combi.push(temp);
    }
}
  console.log(combi.join("\n"));
}

substrings("Aime");
//check the power of two
// function getThePowerOfNumber(num){
//     let x ;
//     for(let i=0;
//         i<x.length;i++)
    
// }
//check palindrome
function isPalindrome(a){
    let myWord= ""
    for(let i=a.length-1;i>=0;i--){
        myWord += a[i]
    }
        if(myWord==a){
            return true
        }
        else{
            return false;
        }
    }


// function checkRoot(number) {
//     var boolean = true
//     while(number%2 == 0) {
//         if(number%2 ==0) {
//             let number = number/2
//             boolean = true
//         } else {
//             boolean = false
//         }
//     }


console.log(checkRoot(2))


 
    
