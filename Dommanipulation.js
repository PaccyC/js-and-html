/*let divElement =document.createElement('div') 
let textNode =document.createTextNode('This is newly created DIV element ') 
divElement.appendChild(textNode) 
let containerDiv=document.querySelector('.container');
containerDiv.appendChild(divElement);
*/
let paccy=document.createElement("h2");
let textNode=document.createTextNode("paccy is the boy");
paccy.appendChild(textNode);
let displayText=document.getElementById("names");
displayText.appendChild(paccy);
var x=document.getElementsByTagName("div")
var att=x.setAttribute("class","names")
console.log(att)