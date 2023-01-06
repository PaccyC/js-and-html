a JavaScript program to convert temperatures to and from Celsius,
// // Fahrenheit.
// // [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f =
// // temperature in Fahrenheit ]
// // Expected Output :
// // 60°C is 140 °F
// // 45°F is 7.222222222222222°C
function convertTemperature(x){
    
if(x==0){
    return (x+32);
}
else if(x!==0){
    return ((x*9/5)+32);
}
else{
    return "unknown number";
}

}
console.log(convertTemperature(54,'°','\00B0'));
function convertFromFahrenheit(n){
    if(n==0){
        return (n-32);
    }
    else{
        return ((n*5/9)-32);
    }


}
 console.log(convertTemperature(54,));
console.log(convertFromFahrenheit(0));

const myArray = ["John" , "Kenny", "Ivan","Paccy"];

const index =myArray.indexOf('John');
if(index !==-1){
    myArray[index] ='Brian';
}
console.log(myArray);

