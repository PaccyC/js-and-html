//reversing a number
function reverseNumber(num){
let y=String(num).split("");
let reverse=""
for(let z=y.length-1;z>=0;z--){
    reverse +=y[z];

}
return reverse;

}
console.log(reverseNumber(34567))
//arranfing numbers
let ages=[2,5,8,10,14,18,30]
ages.sort(function(a,b){ return b-a})
let marks=[100,59,60,45,32,12,34];
marks.sort(function(x,y){return x-y})
console.log(marks)
console.log(ages)

    