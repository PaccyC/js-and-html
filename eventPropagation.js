//event propagation
// window.addEventListener("click",function(){
//     console.log('Window');
// },true);
// document.addEventListener("click",function(){
//     console.log('Document');
// },true);
// document.querySelector(".div2").addEventListener("click",function(e){
//     // e.stopPropagation()
//     console.log('DIV 2');
// },true);
// document.querySelector(".div1").addEventListener("click",function(){
// console.log('DIV 1');
// },true);
// document.querySelector(".button").addEventListener("click",function(e){
//     e.preventDefault();
//     console.log(e.target.innerText='clicked!');
// },false);
//event delegation
// it allows users to append a SINGLE 
// event listener to a parent
//  element that adds it to its present AND future 
//  descendants that match a selector.
document.querySelector('#golf').addEventListener('click',function(e){
    console.log('golf is clicked');
    const target=e.target;
    if(target.matches('li')){
        target.style.backgroundColor='lightgrey';
    }
})
document.querySelector('#football').addEventListener('click',function(e){
    console.log('football is clicked');
    const target=e.target;
    if(target.matches('li')){
        target.style.backgroundColor='lightgrey';
    }
})
document.querySelector('#basketball').addEventListener('click',function(e){
    console.log('basketball is clicked');
    const target=e.target;
    if(target.matches('li')){
        target.style.backgroundColor='lightgrey';
    }
})
document.querySelector('#boxing').addEventListener('click',function(e){
    console.log('boxing is clicked');
    const target=e.target;
    if(target.matches('li')){
        target.style.backgroundColor='lightgrey';
    }
})
document.querySelector('#tennis').addEventListener('click',function(e){
    console.log('tennis is clicked');
    const target=e.target;
    if(target.matches('li')){
        target.style.backgroundColor='lightgrey';
    }
})

document.querySelector('#sports').addEventListener('click',function(e){
    console.log(e.target.getAttribute('id')+' is clicked');
    const target=e.target;
    if(target.matches('li')){
        target.style.backgroundColor='lightgrey';
    }
})
// const sports=document.querySelector('#sports');
// const newSport=document.createElement('li');
// newSport.innerText='rugby';
// newSport.setAttribute('id','rugby');
// sports.appendChild(newSport);