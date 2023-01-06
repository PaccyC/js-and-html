// //variables 
// let btn=document.querySelector('#new-quote');
// let quote=document.querySelector('.quote');
// let person=document.querySelector('.person');
// const quotes=[{
//     quote:`"The best way to find yourself is to lose yourself in the service of others."`,
//     person:`Mahatima Ghandi`
// },{
//     quote:`"If you want to live a happy life , tie it to a goal,not to people or things."`,
//     person:`Albert Einstein`
// },
// {
//     quote:`"At his best ,man is the noblest of all animals ;separated from law and justice he is the worst."`,
//     person:`Aristotle`
// },{
//     quote:`"Your time is limited, so don't waste it living someone else's life"`,
//     person:`Steve Jobs`
// },{
//     quote:`"Tell me and I forget. Teach me and I remember.Involve me and I learn."`,
//     person:`Benjamin Franklin`
// },{
//     quote:`"If you look at what you have in life,you'll always have more.If you look at what you don't have in life,you'll never have enough "`,
//     person:`Oprah Winfrey`
// },{
//     quote:`"It does not matter how slowly you go as long as you do not stop."`,
//     person:`Confucius`
// },{
//     quote:`"Our lives begin to end the day we become silent about things matter."`,
//     person:`Martin Luther King,JR.`
// },{
//     quote:`"Remember that not getting what you want os sometimes a wonderful stroke of luck."`,
//     person:`Dalai Lama`
// },{
//     quote:`"The journey f a thousand mles begins with one step."`,
//     person:`Lao Tzu`
// },
// ]
// btn.addEventListener('click',function(){
//     let random=Math.floor(Math.random()* quotes.length);
//     quote.innerText=quotes[random].quote;
//     person.innerText=quotes[random].person;

// })


// // project 2
//variable
// let openBtn=document.getElementById('open-button');
// let modalContainer=document.getElementById('modal-container');
// let closeBtn=document.getElementById('close-button');
// //event listener
// openBtn.addEventListener('click',function(){
//     modalContainer.style.display='block';
// })
// closeBtn.addEventListener('click',function(){
//     modalContainer.style.display='none'
// })
// window.addEventListener('click',function(e){
//     if(e.target===modalContainer){
//         modalContainer.style.display='none';
//     }
//     else{
//         modalContainer.style.display='block';
//     }
// })
// // project 3
// Accordion

// const accordion=document.getElementsByClassName('content-container')
// for ( i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click',function(){
//         this.classList.toggle('active');
//     })
    
// }
// // project 4:stop watch 
const startStopBtn=document.querySelector('startStopBtn');
const resetBtn=document.querySelector('resetBtn');
//variables for time value
let seconds=0;
let minutes=0;
let hours=0;
//variables for reading zero
let readingSeconds=0
let readingMinutes=0
let readingHours=0
//  variables for set interval  & timerstatus
let timerInterval=null;
let timerStatus="stopped";
//stop Watch function
function stopWatch(){

    seconds++;
    if(seconds/60===1){
        seconds=0;
        minutes++;
        if(minutes/60===1){
            minutes=0;
            hours++;
        }
    }
    if(seconds<10){
        readingSeconds="0" +seconds.toString()
    }
    else{
        readingSeconds=seconds;
    }
    if(minutes<10){
        readingMinutes="0" +minutes.toString()
    }
    else{
        readingMinutes=minutes
        }
    if(hours<10){
        readingHours="0" +hours.toString()
    }
    else{
        readingHours=hours;
    }
let displayTimer=document.getElementById('timer').innerText=readingHours +':'+readingMinutes+':' +readingSeconds ;
}
window.setInterval(stopWatch,1000)
startStopBtn.addEventListener('click',function(){
    if(timerStatus==='stopped'){
        timerInterval.window.setInterval(stopWatch,1000);
        document.getElementById('startStopBtn').innerHTML=`<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus="started";
    }else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML=`<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus="stoppped";
    }
})
resetBtn.addEventListener('click',function(){
    window.clearInterval(timerInterval);
    seconds=0;
    minutes=0
    hours=0;
    document.getElementById('timer').innerHTML="00:00:00"
})