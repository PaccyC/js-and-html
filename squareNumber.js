function isPerfectSquare(x){

    if(x>=0){
        let sr = Math.sqrt(x);
        return ((sr*sr)==x);
    }
    return false;
}
console.log(isPerfectSquare(36))
// var myArray=["James","John","Ivan","Gilbert"];
// let x= myArray.replace("")
// x[2]="Norman";
// x[1] ="Kenny";
// console.log(myArray)