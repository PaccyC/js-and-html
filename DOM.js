//  function names(){
//     document.getElementsByTagName("p")[3].innerHTML= "Hirwa rukundo Hope"
//     document.getElementsByTagName("p")[1].innerHTML= "ELITE";   

// }
// function getLongestNames(){
//     let para = document.getElementsByTagName("p")
//     for(let i=0;i<para.length;i++){
//         if(i==2){
//             document.getElementsByTagName("p")[4].innerHTML =para[i].innerHTML= "Abayisenga";
//         }
//         if(i==1){
//             document.getElementsByTagName("p")[6].innerHTML=para[i].innerHTML ="Hirwa Rukundo Hope";
//         }
//         if(i==0){
//             document.getElementsByTagName("p")[5].innerHTML =para[i].innerHTML ="Dieudonne";
//         }
//     }
// }

//  var mainHeading=document.getElementById('main-heading')
// //  .innerHTML="this is the main heading";
//  console.log(mainHeading);
//  var lists=document.getElementsByClassName('list-items');
//  console.log(lists);
//  var container=document.querySelectorAll('div')
//  console.log(container);
//  const title=document.getElementById('main-heading');
//  title.style.color='white';
//  console.log(title);
// const listItems=document.querySelectorAll('list-items')
// for(i=0;i<listItems.length;i++){
//     listItems[i].style.fontSize='10rem';
// }
//     //creting Elements
//     const ul=document.querySelector('ul');
//     const li=document.createElement('li');
//     ul.append(li);
//     li.innerText='X-men';
//     //modifying text
//     const firstListItem=document.querySelector('.list-items');
//      console.log(firstListItem.innerText);
//      console.log(firstListItem.textContent);
//     console.log(firstListItem.innerHTML);
//     //modifying Attributes and classes
//     li.setAttribute('id','main-heading');
//     li.removeAttribute('id');
//     const titles=document.querySelector('#main-heading');
//     console.log(titles.getAttribute('id'));
//     li.classList.add('list-items');
//     console.log(li.classList.contains('list-items'));
//     //removing elements
//     li.remove();



// let  ul=document.querySelector('ul')
// console.log(ul.parentNode)
// console.log(ul.parentElement.parentElement.parentElement)
//childNodes traversal
// console.log(ul.childNodes)
// console.log(ul.firstChild)
// console.log(ul.lastChild)
// ul.childNodes[0].style.backgroundColor='blue';
// console.log(ul.children)
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
//  //event Listeners
//element.addEventListener("click",function);
const buttonTwo=document.querySelector('.btn-2');
function alertBtn(){
    alert('I also love Javascript');
}
buttonTwo.addEventListener("click",alertBtn);
//mouseover
const newBgColor=document.querySelector('.boxes-box-3');
function changeBgColor(){
    newBgColor.style.backgroundColor='blue';
}
newBgColor.addEventListener("mouseover",changeBgColor);
const nextBgColor=document.querySelector('.boxes-box-3');
function newColor(){
    nextBgColor.style.backgroundColor='white';
}
nextBgColor.addEventListener("mouseout",newColor);
//reveal event
const revealBtn=document.querySelector('.reveal-btn');
const hiddenContent=document.querySelector('.hidden-content');
function revealContent(){
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn');
    }
    else{
        hiddenContent.classList.add('reveal-btn')    
    }
}
revealBtn.addEventListener('click',revealContent);