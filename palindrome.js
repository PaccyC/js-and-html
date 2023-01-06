//this is a program to check if the word is palindrome//
function check_Palindrome(myString){
let myStr= myString.split("");
var reverseMyStr = "";

for(let i=myStr.length;i>=0;i--){
reverseMyStr += myStr[i];
if(reverseMyStr == myStr[i]){
    return "It is a palindrome";
}
else {
    return " it is not a palndrome"
}
}
return  reverseMyStr;

}
console.log(check_Palindrome(madam));