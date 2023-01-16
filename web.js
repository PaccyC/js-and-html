


// let timerID=setInterval(document.addEventListener,1000);


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

function changeColor(){
    document.querySelector('#form-container').style.backgroundColor='lightblue';
    // let secondsNbr=0;
    // console.log(secondsNbr);
    // secondsNbr++;
    // if(secondsNbr==8){   
    //     clearInterval(timerID);
    // }
}
document.addEventListener('submit', ()=>{
    changeColor()
setTimeout(()=>{
    document.querySelector('#container').style.backgroundColor='teal';
} , 1000)
});
