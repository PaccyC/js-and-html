function awardBonuses(){
    for(let i=0;i<100;i++)
if(i%3==0){
    console.log(`${i}This emoloyee will get vacation`);
}

else if(i%5==0){
    console.log(`${i}=This employee will get $100,000 bonus !`);
    
}
else if(i%3==0 && i%5==0){
    console.log(` ${i}---JackPOT !`);
}
else{
    console.log(`${i}>>>>>Nothing he/she will get`);
}
}
console.log(awardBonuses(36));