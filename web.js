
function changeColor(){
    document.querySelector('#container').style.backgroundColor='lightblue';
}
document.addEventListener('submit',changeColor);
const getLocation=()=>{
    const status=document.querySelector('.status');
    const success=(position)=>{
        console.log(position)
        const latitude=position.coords.latitude;
        const longitude=position.coords.longitude;
         console.log(latitude +  ' ' + longitude);
        const geoApiUrl=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        fetch(geoApiUrl)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

    }
    const error =()=>{
        status.textContent='unable to retrieve your location';
    }
    navigator.geolocation.getCurrentPosition(success,error);
}
document.querySelector('.find-state').addEventListener('click',getLocation)
//animations

// function myMove(){
//     var elem=document.getElementById("animate");
//     var pos=0;
//     var id=setInterval(frame,5);
//     function frame(){
//         if(pos==350){
//             clearInterval(id)
//         }else{
//             pos++;
//             elem.style.top=pos +'px'
//             elem.style.left=pos +'px';
//         }
//     }
// }