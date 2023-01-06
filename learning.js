// let text= document.getElementById('text')
// let input=document.getElementById('input')
// let note=document.getElementById('note')
// function load(){
//     document.getElementById ("text").innerHTML= "The page loads"
    
//         document.getElementById('input').onchange=function(){

//         document.getElementById("text").innerHTML=document.getElementById("input").value.toUpperCase();
//         // document.getElementById("input").value=document.getElementById("input").value.toUpperCase
//    document.getElementById("input").value= document.getElementById("input").value.toUpperCase();
//     }
// }
// document.getElementById('input').onfocus=function(){
//     document.getElementById('note').innerHTML = 'please insert a valid data';
// }

// document.getElementById('input').oninput=function(){
//     document.getElementById('text').innerHTML =document.getElementById('input').value
// }
function pickPixel(){
    let html= document.firstChild;
    
    let body = html.nextSibling;
     console.log(body)
    let Pixel= document.firstChild.firstChild.nextSibling.nextSibling.nextSibling;
    console.log(Pixel);
    console.log(Pixel.parentElement)
    console.log(Pixel.previousSibling.previousSibling.innerHTML)   
}