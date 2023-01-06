// function firstUnreapetedCharacter(word){
// let y =word.split(" ");
//  let i =String.count()
// for(let x=0;x<y.length;x++){
//     if(y[x]!=[x]+1){
//     i
        
//     }
// }
// return y
// }
// console.log(firstUnreapetedCharacter("paccy"));
function firstNonRepeating(str)
{
    var fi=new Array(256);
    fi.fill(-1);
    for(var i = 0; i<256; i++)
        fi[i] = -1;
        for(var i = 0; i<str.length; i++)
        {
            if(fi[str.charCodeAt(i)] ==-1)
            {
                fi[str.charCodeAt(i)] = i;
                 
            }
            else
            {
                fi[str.charCodeAt(i)] = -2
                for(var i = 0; i<str.length; i++)
    {
        if(fi[str.charCodeAt(i)] ==-1)
        {
            fi[str.charCodeAt(i)] = i;
             
        }
        else
        {
            fi[str.charCodeAt(i)] = -2
            for(var i = 0; i<str.length; i++)
    {
        if(fi[str.charCodeAt(i)] ==-1)
        {
            fi[str.charCodeAt(i)] = i;
             
        }
        else
        {
            fi[str.charCodeAt(i)] = -2;
        }
    }
 
    var res = Infinity;
 
    for(var i = 0; i<256; i++) {
        if(fi[i] >= 0)
        res = Math.min(res, fi[i]);
}
if(res == Infinity) return -1;
else{ return res;
}
        }
        
 
       
